import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CREDENCIALES_SERVIDOR, SEGURIDAD_CONTROLLER } from '../../environments/environment';
import { ILogin } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  private URL_SERVER = {
    HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
  };
  private SEGURIDAD_CONTROLLERS = {
    COMUN: `${SEGURIDAD_CONTROLLER.CONTROLLERS.COMUN}`,
    CRUD: {
      INICIO_SISTEMA: `${SEGURIDAD_CONTROLLER.CONTROLLERS.CRUD.INICIO_SISTEMA}`,
      LOGIN: `${SEGURIDAD_CONTROLLER.CONTROLLERS.CRUD.LOGIN}`
    }
  };
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public async inicioSistema() {
    // return data api login..
    return this.httpClient.get(`${this.URL_SERVER.HOST}${this.SEGURIDAD_CONTROLLERS.COMUN}${this.SEGURIDAD_CONTROLLERS.CRUD.INICIO_SISTEMA}`, {
      params: {
      }
    }).toPromise();
  }

  /**
   * 
   */
  public async login(credenciales: ILogin) {
    // return data api login..
    return this.httpClient.get(`${this.URL_SERVER.HOST}${this.SEGURIDAD_CONTROLLERS.COMUN}${this.SEGURIDAD_CONTROLLERS.CRUD.LOGIN}`, {
      params: {
        usuario: credenciales.usuario,
        clave: credenciales.clave
      }
    }).toPromise();
  }

}
