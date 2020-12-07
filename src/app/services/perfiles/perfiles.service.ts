import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { buffer } from '@tensorflow/tfjs-core';
import { IUsuario } from 'src/app/interfaces/usuario.interface';
import { CREDENCIALES_SERVIDOR, PERFILES_CONTROLLER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  /**
  * variables que verifican si hay cambios en el contador d preguntas contestadas
  */
  public actualizaListado = false;
  @Output() creoUsuario: EventEmitter<boolean> = new EventEmitter();
 
  private URL_SERVER = {
    HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
  };
  private PERFILES_CONTROLLERS = {
    COMUN: {
      ADMINISTRADORES: `${PERFILES_CONTROLLER.COMUN.ADMINISTRADORES}`,
      PROFESORES: `${PERFILES_CONTROLLER.COMUN.PROFESORES}`,
      CLIENTES: `${PERFILES_CONTROLLER.COMUN.CLIENTES}`
    },
    CRUD: {
      CREAR: `${PERFILES_CONTROLLER.CRUD.CREAR}`
    }
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public async retornaUsuarios(tipoPerfil: number = 1) {
    // retornando la url de proceso segun perfil...
    const urlProceso = this.retornaUrlProceso(tipoPerfil);
    // return...
    return await this.httpClient.get(`${this.URL_SERVER.HOST}${urlProceso}`).toPromise();
  }

  private setDataUsuario(usuarioNuevo: IUsuario, formData: FormData) {
    const { nombre, apellido, correo, usuario } = usuarioNuevo;
    // set data...
    formData.append('usuario', correo);
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('correo', correo);
    formData.append('nombre_completo', `${nombre} ${apellido}`);
  }
 
  private setArchivoLocal(usuario: IUsuario, file: File) {
    try {
      const formData = new FormData();
      // verificando si actualizo el archivo...
      if(file !== undefined) {
        // set formulario...
        const ext = file.name.split('.').pop();
        formData.append('file', file, file.name);
        formData.append('name', file.name);
      }
      // adjuntamos l resto de datos...
      this.setDataUsuario(usuario, formData); 
      // return...
      return formData;      
    } catch (error) {
      throw error;
    }   
  }

  private retornaUrlProceso(tipoPerfil: number): string {
    let urlProceso: string;
    // verificando q opcion a procesar...
    switch(tipoPerfil) {
      case 1:
        urlProceso = this.PERFILES_CONTROLLERS.COMUN.ADMINISTRADORES;
        break;
      case 2:
        urlProceso = this.PERFILES_CONTROLLERS.COMUN.PROFESORES;
        break;
      case 3:
        urlProceso = this.PERFILES_CONTROLLERS.COMUN.CLIENTES;
        break;        
    }
    // return...
    return urlProceso;
  }

  public async creaUsuario(usuario: IUsuario, file: File, tipoPerfil: number = 1) {
    try {
      // verificando la opcion desde dònde lee el archivo...
      const formData: FormData = this.setArchivoLocal(usuario, file);
      // retornando la url de proceso segun perfil...
      const urlProceso = this.retornaUrlProceso(tipoPerfil);
      // return...
      return await this.httpClient.post(`${this.URL_SERVER.HOST}${urlProceso}`, 
        formData).toPromise();
    } catch (error) {
      throw error;
    }
  }

  private async actualizaDatosUsuario(usuarioActualiza: IUsuario, usuarioOriginal: IUsuario, file: any) {

    return await this.setArchivoLocal(usuarioActualiza, file);
  }

  public async actualizaUsuario(usuarioActualiza: IUsuario, usuarioOriginal: IUsuario, file: File, tipoPerfil: number = 1) {
    try {
      // verificando la opcion desde dònde lee el archivo...
      const formData = await this.actualizaDatosUsuario(usuarioActualiza, usuarioOriginal, file);
      // retornando la url de proceso segun perfil...
      const urlProceso = this.retornaUrlProceso(tipoPerfil);
      // return...
      return await this.httpClient.put(`${this.URL_SERVER.HOST}${urlProceso}/${usuarioOriginal._id}`, formData).toPromise();
    } catch (error) {
      throw error;
    }
  }

  public async eliminaUsuario(usuarioID: string, tipoPerfil: number = 1) {
    try {
      // retornando la url de proceso segun perfil...
      const urlProceso = this.retornaUrlProceso(tipoPerfil);
      // return...      
      return await this.httpClient.delete(`${this.URL_SERVER.HOST}${urlProceso}/${usuarioID}`).toPromise()
    } catch (error) {
      throw error;
    }
  }

}
