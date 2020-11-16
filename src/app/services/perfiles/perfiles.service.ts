import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
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
      ADMINISTRADORES: `${PERFILES_CONTROLLER.COMUN.ADMINISTRDORES}`
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

  public async creaAdministrador(usuario: IUsuario) {
    try {
      return await this.httpClient.post(`${this.URL_SERVER.HOST}${this.PERFILES_CONTROLLERS.CRUD.CREAR}`, usuario).toPromise();
    } catch (error) {
      throw error;
    }
  }
}
