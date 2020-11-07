import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { CREDENCIALES_SERVIDOR, SEGURIDAD_CONTROLLER, STORAGE } from '../../environments/environment';
import { ILogin } from '../interfaces/login.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  public usuario = null;
  public behaviorSubject = new BehaviorSubject(false);

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
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private storage: Storage,
    private platform: Platform,
    private router: Router
  ) { 
    this.platform.ready().then(() => {
      this.checkToken();
    });    
  }

  public checkToken() {
    this.storage.get(STORAGE.TOKEN.KEY).then(token => {
      if (token) {
        let decoded = this.jwtHelperService.decodeToken(token);
        let isExpired = this.jwtHelperService.isTokenExpired(token);
 
        if (!isExpired) {
          this.usuario = decoded;
          this.behaviorSubject.next(true);
        } else {
          this.storage.remove(STORAGE.TOKEN.KEY);
        }
      }
    });
  }

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
    try {
      // return data api login..
      const result: any = await this.httpClient.get(`${this.URL_SERVER.HOST}${this.SEGURIDAD_CONTROLLERS.COMUN}${this.SEGURIDAD_CONTROLLERS.CRUD.LOGIN}`, {
        params: {
          usuario: credenciales.usuario,
          clave: credenciales.clave
        }
      }).toPromise();
      // verificando resultados...
      if(result) {
        const { token } = result;
        this.storage.set(STORAGE.TOKEN.KEY, token);
        this.usuario = this.jwtHelperService.decodeToken(token);
        this.behaviorSubject.next(true);      
      }
      // return...
      return result.message;
    } catch (error) {
      throw error;
    }
  }

  public async verificaAltaUsuario() {
    return this.behaviorSubject.value;
  }

  logout() {
    // limpiando el token...
    this.storage.remove(STORAGE.TOKEN.KEY).then(() => {
      this.behaviorSubject.next(false);
      this.router.navigate(['/login']);
    });
  }

}
