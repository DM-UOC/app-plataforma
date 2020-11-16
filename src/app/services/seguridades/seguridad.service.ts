import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { CREDENCIALES_SERVIDOR, SEGURIDAD_CONTROLLER, STORAGE } from '../../../environments/environment';
import { ILogin, IUsuarioToken } from '../../interfaces/login.interface';
import { Router } from '@angular/router';
import { ICatalogo } from '../../interfaces/catalogo.interface';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  public usuario: IUsuarioToken = null;
  public behaviorSubject = new BehaviorSubject(false);

  private URL_SERVER = {
    HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
  };
  private SEGURIDAD_CONTROLLERS = {
    COMUN: `${SEGURIDAD_CONTROLLER.CONTROLLERS.COMUN}`,
    CRUD: {
      INICIO_SISTEMA: `${SEGURIDAD_CONTROLLER.CONTROLLERS.CRUD.INICIO_SISTEMA}`,
      LOGIN: `${SEGURIDAD_CONTROLLER.CONTROLLERS.CRUD.LOGIN}`,
      MENU: `${SEGURIDAD_CONTROLLER.CONTROLLERS.CRUD.MENU}`
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

  public getUsuario() {
    return this.usuario;
  }

  public setUsuario(usuario: IUsuarioToken) {
    this.usuario = usuario;
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
        // almacenando el token...
        this.storage.set(STORAGE.TOKEN.KEY, token);
        // guardando el usuario...
        this.setUsuario(this.jwtHelperService.decodeToken(token));
        // bandera q indica q el usuario está logeado...
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

  public logout() {
    // limpiando el token...
    this.storage.remove(STORAGE.TOKEN.KEY).then(() => {
      this.behaviorSubject.next(false);
      this.router.navigate(['/login']);
    });
  }

  public async retornaMenuUsuario() {
    try {
      // get menu usuario...
      const result = await this.httpClient.get<ICatalogo>(`${this.URL_SERVER.HOST}${this.SEGURIDAD_CONTROLLERS.COMUN}${this.SEGURIDAD_CONTROLLERS.CRUD.MENU}`, {
        params: {
          codigo: this.usuario.perfil_menu
        }
      }).toPromise();
      // return...
      return result;
    } catch (error) {
      throw error;
    }
  }
  
}
