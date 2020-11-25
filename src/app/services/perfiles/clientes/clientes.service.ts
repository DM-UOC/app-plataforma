import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { IHijo } from 'src/app/interfaces/hijo.interface';
import { CREDENCIALES_SERVIDOR, PERFILES_CONTROLLER } from 'src/environments/environment';
import { SeguridadService } from '../../seguridades/seguridad.service';
import * as moment from "moment";

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
        CREAR: `${PERFILES_CONTROLLER.CRUD.CLIENTES.HIJOS.CREAR}`
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

  private setDataUsuario(usuarioNuevo: IHijo, formData: FormData) {
    const { nombre, apellido, fecha_nacimiento, representante_id } = usuarioNuevo;
    // set data...
    formData.append('representante_id', representante_id);
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('fecha_nacimiento', moment(fecha_nacimiento).utc().toString());
    formData.append('nombre_completo', `${nombre} ${apellido}`);
  }

  private setArchivoLocal(usuario: IHijo, file: File) {
    // set formulario...
    const ext = file.name.split('.').pop();
    const formData = new FormData();
    formData.append('file', file, `myimage.${ext}`);
    formData.append('name', file.name);
    // adjuntamos l resto de datos...
    this.setDataUsuario(usuario, formData); 
    // return...
    return formData;   
  }

  public async crearHijo(hijo: IHijo, file: File) {
    try {
      // verificando la opcion desde dònde lee el archivo...
      const formData: FormData = this.setArchivoLocal(hijo, file);
      // return...
      return await this
        .httpClient
        .post(
          `${this.URL_SERVER.HOST}${this.PERFILES_CONTROLLERS.COMUN.CLIENTES}${this.PERFILES_CONTROLLERS.CRUD.HIJOS.CREAR}`, 
          formData)
        .toPromise();
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
