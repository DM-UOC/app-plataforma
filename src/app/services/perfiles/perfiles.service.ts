import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/usuario.interface';
import { CREDENCIALES_SERVIDOR, PERFILES_CONTROLLER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  private URL_SERVER = {
    HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
  };
  private PERFILES_CONTROLLERS = {
    COMUN: {
      ADMINISTRADORES: `${PERFILES_CONTROLLER.COMUN.ADMINISTRADORES}`
    },
    CRUD: {
      CREAR: `${PERFILES_CONTROLLER.CRUD.CREAR}`
    }
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  async retornaAdministradores() {
    return await this.httpClient.get(`${this.URL_SERVER.HOST}${this.PERFILES_CONTROLLERS.COMUN.ADMINISTRADORES}`).toPromise();
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

  public async creaAdministrador(usuario: IUsuario, file: File) {
    try {
      // verificando la opcion desde dònde lee el archivo...
      const formData: FormData = this.setArchivoLocal(usuario, file);
      // return...
      return await this.httpClient.post(`${this.URL_SERVER.HOST}${this.PERFILES_CONTROLLERS.COMUN.ADMINISTRADORES}`, 
        formData).toPromise();
    } catch (error) {
      throw error;
    }
  }

}
