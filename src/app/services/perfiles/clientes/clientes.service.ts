import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { IHijo } from 'src/app/interfaces/hijo.interface';
import { CREDENCIALES_SERVIDOR, PERFILES_CONTROLLER } from 'src/environments/environment';
import { SeguridadService } from '../../seguridades/seguridad.service';
import moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  /**
  * variables que verifican si hay cambios en el contador d preguntas contestadas
  */
  public actualizaListado = false;
  @Output() creoUsuario: EventEmitter<boolean> = new EventEmitter();

  private representante: any;

  private URL_SERVER = {
    HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
  };
  private PERFILES_CONTROLLERS = {
    COMUN: {
      CLIENTES: `${PERFILES_CONTROLLER.COMUN.CLIENTES}`
    },
    CRUD: {
      CREAR: `${PERFILES_CONTROLLER.CRUD.CREAR}`,
      EXISTE_REPRESENTANTE: `${PERFILES_CONTROLLER.CRUD.CLIENTES.EXISTE_REPRESENTANTE}`,
      HIJOS: {
        LISTAR: `${PERFILES_CONTROLLER.CRUD.CLIENTES.HIJOS.LISTAR}`,
        COMUN: `${PERFILES_CONTROLLER.CRUD.CLIENTES.HIJOS.COMUN}`
      }
    }
  };

  constructor(
    private httpClient: HttpClient,
    private seguridadService: SeguridadService
  ) { 
  }

  public setRepresentante(representante: any) {
    this.representante = representante;  
  }

  public getRepresentante() {
    return this.representante;
  }

  public async retornaHijosPorRepresentanteId(usuario: string, estado: boolean = true) {
    try {
      return await this
        .httpClient
        .get(`${this.URL_SERVER.HOST}${this.PERFILES_CONTROLLERS.COMUN.CLIENTES}${this.PERFILES_CONTROLLERS.CRUD.HIJOS.LISTAR}`, {
          params: {
            usuario,
            estado: estado.toString()
          }
        })
        .toPromise()
    } catch (error) {
      throw error;
    }
  }

  private setDataUsuario(usuario: IHijo, hijoOriginal: IHijo, formData: FormData) {
    const { representante_id, nombre, apellido, fecha_nacimiento } = usuario;
    // set data...
    // verifica si es una actualización...
    if(hijoOriginal !== null) {
      formData.append('_id', hijoOriginal._id);
    }
    formData.append('representante_id', representante_id);
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('fecha_nacimiento', moment(fecha_nacimiento).format('YYYY-MM-DD'));
    formData.append('nombre_completo', `${nombre} ${apellido}`);
  }

  private setArchivoLocal(usuario: IHijo, hijoOriginal: IHijo, file: File) {
    // set formulario...
    const formData = new FormData();
    // verificando si actualizo el archivo...
    if(file !== undefined) {
      // set formulario...
      formData.append('file', file, file.name);
      formData.append('name', file.name);
    }
    // adjuntamos l resto de datos...
    this.setDataUsuario(usuario, hijoOriginal, formData);
    // return...
    return formData;   
  }

  public async crearHijo(hijo: IHijo, file: File) {
    try {
      // verificando la opcion desde dònde lee el archivo...
      const formData: FormData = this.setArchivoLocal(hijo, null, file);
      // return...
      return await this
        .httpClient
        .post(
          `${this.URL_SERVER.HOST}${this.PERFILES_CONTROLLERS.COMUN.CLIENTES}${this.PERFILES_CONTROLLERS.CRUD.HIJOS.COMUN}`, 
          formData)
        .toPromise();
    } catch (error) {
      throw error;
    }
  }

  private actualizaDatosHijo(hijoActualiza: IHijo, hijoOriginal: IHijo, file: any) {
    // seteo del datos...
    return this.setArchivoLocal(hijoActualiza, hijoOriginal, file);
  }

  public actualizaHijo(hijoActualiza: IHijo, hijoOriginal: IHijo, file: File) {
    try {
      // verificando la opcion desde dònde lee el archivo...
      const formData = this.actualizaDatosHijo(hijoActualiza, hijoOriginal, file);
      // retornando los resultados...
      return this
        .httpClient.put(`${this.URL_SERVER.HOST}${this.PERFILES_CONTROLLERS.COMUN.CLIENTES}${this.PERFILES_CONTROLLERS.CRUD.HIJOS.COMUN}`, formData);
    } catch (error) {
      throw error;
    }
  }

  public async eliminaHijo(hijoID: string) {
    try {
      // return...      
      return await this.httpClient
      .delete(`${this.URL_SERVER.HOST}${this.PERFILES_CONTROLLERS.COMUN.CLIENTES}${this.PERFILES_CONTROLLERS.CRUD.HIJOS.COMUN}/${hijoID}`).toPromise()      
    } catch (error) {
      throw error;
    }
  }

  public async verificaExisteRepresentante(usuario: string) {
    try {
      return await this.httpClient
      .get(`${this.URL_SERVER.HOST}${this.PERFILES_CONTROLLERS.COMUN.CLIENTES}${this.PERFILES_CONTROLLERS.CRUD.EXISTE_REPRESENTANTE}`, {
        params: {
          usuario
        }
      }).toPromise();      
    } catch (error) {
      throw error;
    }
  }

}
