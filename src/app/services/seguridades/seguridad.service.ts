import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Storage } from '@ionic/storage';

import { CREDENCIALES_SERVIDOR, SEGURIDAD_CONTROLLER, STORAGE } from '../../../environments/environment';
import { ILogin, IUsuarioToken } from '../../interfaces/login.interface';
import { ICatalogo } from '../../interfaces/catalogo.interface';
import { IUsuario } from 'src/app/interfaces/usuario.interface';
import { IToken } from 'src/app/interfaces/comuns/token.interface';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  private user: SocialUser;
  private loggedIn: boolean;
  public usuarioToken: IToken = null;
  public usuarioRegistro: IUsuario;
  public behaviorSubject = new BehaviorSubject(false);

  private URL_SERVER = {
    HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
  };
  private SEGURIDAD_CONTROLLERS = {
    COMUN: `${SEGURIDAD_CONTROLLER.CONTROLLERS.COMUN}`,
    CRUD: {
      INICIO_SISTEMA: `${SEGURIDAD_CONTROLLER.CONTROLLERS.CRUD.INICIO_SISTEMA}`,
      LOGIN: `${SEGURIDAD_CONTROLLER.CONTROLLERS.CRUD.LOGIN}`,
      RED_SOCIAL: `${SEGURIDAD_CONTROLLER.CONTROLLERS.CRUD.RED_SOCIAL}`,
      MENU: `${SEGURIDAD_CONTROLLER.CONTROLLERS.CRUD.MENU}`
    }
  };
  
  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private storage: Storage,
    private platform: Platform,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) { 
    this.platform.ready().then(() => {
      this.checkToken();
    });    
  }

  public getUsuarioToken() {
    return this.usuarioToken;
  }

  public setUsuario(usuarioToken: IToken) {
    this.usuarioToken = usuarioToken;
  }

  public checkToken() {
    this.storage.get(STORAGE.TOKEN.KEY).then(token => {
      if (token) {
        let decoded = this.jwtHelperService.decodeToken(token);
        let isExpired = this.jwtHelperService.isTokenExpired(token);
        // expirado el tokenn...
        if (!isExpired) {
          this.usuarioToken = decoded;
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

  private async verificaLoginInterno(credenciales: ILogin) {
    try {
      // return data api login..
      const result: any = await this.httpClient
        .get(`${this.URL_SERVER.HOST}${this.SEGURIDAD_CONTROLLERS.COMUN}${this.SEGURIDAD_CONTROLLERS.CRUD.LOGIN}`, {
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
      return result;
    } catch (error) {
      throw error
    }
  }

  private retornaRedSocialId(redsocial: string) {
    let socialProvider: any;
    // verificando la red social a la q s quiere ingresar...
    switch(redsocial) {
      case 'g':
        socialProvider = GoogleLoginProvider.PROVIDER_ID;
        break;
      case 'f':
        socialProvider = FacebookLoginProvider.PROVIDER_ID;
        break;
    }
    // retornando...
    return socialProvider;
  }

  private async verificaUsuarioRedSocial(credenciales: SocialUser) {
    try {
      // return data api login..
      const result: any = await this
      .httpClient
      .get(`${this.URL_SERVER.HOST}${this.SEGURIDAD_CONTROLLERS.COMUN}${this.SEGURIDAD_CONTROLLERS.CRUD.RED_SOCIAL}`, {
        params: {
          credenciales: JSON.stringify(credenciales)
        }
      })
      .toPromise();
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
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  /**
   * 
   */
  public async login(credenciales: ILogin = null, esRedSocial: boolean = false, redSocial: string = '') {
    try {
      let result: any = {
        message: 'vacio...'
      };
      // verifica la opcion a ingresar al sistema...
      if(!redSocial) {
        result = await this.verificaLoginInterno(credenciales);
      }
      else {
        // red social con la que ingresará...
        let socialProvider = this.retornaRedSocialId(redSocial);
        // auntenticacion...
        let credencialRS = await this.socialAuthService.signIn(socialProvider);
        // registramos datos para guarda en la bd...
        // devolvemos el registro...
        result = await this.verificaUsuarioRedSocial(credencialRS);
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

  public async logout() {
    try {
      const usuario: any = this.getUsuarioToken();
      // limpiando el token...
      await this.storage.remove(STORAGE.TOKEN.KEY);
      await this.storage.remove(STORAGE.MENU.KEY);
      // verificando si se ha logeado con red social...
      if(usuario.codigo_perfil === 3) {
        this.socialAuthService.authState.subscribe(async (user) => {
          if(!user) {
            await this.socialAuthService.signOut();
          }
          else {
            this.user = user;
            this.loggedIn = (user != null);
          }
        });
      }
      // bandera de autenticacion false..
      this.behaviorSubject.next(false);
      // retorna a la pagina de login...
      this.router.navigate(['/login']);      
    } catch (error) {
      throw error;
    }
  }

  public async retornaMenuUsuario() {
    try {
      // get menu usuario...
      return await this.httpClient.get<ICatalogo>(`${this.URL_SERVER.HOST}${this.SEGURIDAD_CONTROLLERS.COMUN}${this.SEGURIDAD_CONTROLLERS.CRUD.MENU}`, {
        params: {
          codigo: this.usuarioToken.perfil_menu
        }
      }).toPromise();
    } catch (error) {
      throw error;
    }
  }
  
}
