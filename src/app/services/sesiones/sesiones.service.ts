import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ISesion } from 'src/app/interfaces/sesiones/sesion.interface';
import { CREDENCIALES_SERVIDOR, SESIONES_CONTROLLER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

    /**
  * variables que verifican si hay cambios en el contador d preguntas contestadas
  */
 public actualizaListado = false;
 @Output() creoSesion: EventEmitter<boolean> = new EventEmitter();
 @Output() creoRepresentante: EventEmitter<boolean> = new EventEmitter();

 private URL_SERVER = {
   HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
 };
 private SESIONES_CONTROLLER = {
   COMUN: `${SESIONES_CONTROLLER.COMUN}`,
   CRUD: {
     REPRESENTANTES: {
       COMUN: {
         REPRESENTANTES: `${SESIONES_CONTROLLER.CRUD.REPRESENTANTES.COMUN.REPRESENTANTES}`,
         REPRESENTANTE: `${SESIONES_CONTROLLER.CRUD.REPRESENTANTES.COMUN.REPRESENTANTE}`
       },
       CRUD: {
        LISTA: `${SESIONES_CONTROLLER.CRUD.REPRESENTANTES.CRUD.LISTA}`,
        RETIRAR: `${SESIONES_CONTROLLER.CRUD.REPRESENTANTES.CRUD.RETIRAR}`
       }
     }
   }
 };

  constructor(
    private httpClient: HttpClient
  ) { }

  retornaSesionesProfesor(usuario: string) {
    return this.httpClient.get<ISesion []>(`${this.URL_SERVER.HOST}${this.SESIONES_CONTROLLER.COMUN}`, {
      params: {
        usuario
      }
    });
  }

  public crearSesion(usuario: string, sesion: ISesion) {
    try {
      // retornando observable...
      return this.httpClient
      .post<ISesion>(`${this.URL_SERVER.HOST}${this.SESIONES_CONTROLLER.COMUN}`, {
        usuario,
        sesion
      });
    } catch (error) {
      throw error;
    }
  }

  public actualizarSesion(sesionActualiza: ISesion, sesionOriginal: ISesion) {
    try {
      // retornando los resultados...
      return this.httpClient
        .put<ISesion>(`${this.URL_SERVER.HOST}${this.SESIONES_CONTROLLER.COMUN}/${sesionOriginal._id}`, sesionActualiza);
    } catch (error) {
      throw error;
    }
  }

  public eliminaMateria(sesionId: string) {
    try {
      return this.httpClient.delete(`${this.URL_SERVER.HOST}${this.SESIONES_CONTROLLER.COMUN}/${sesionId}`);
    } catch (error) {
      throw error;
    }
  }
  
  retornaRepresentantesSesion(sesion: ISesion) {
    try {
      return this.httpClient
      .get<ISesion>(`${this.URL_SERVER.HOST}${this.SESIONES_CONTROLLER.COMUN}${this.SESIONES_CONTROLLER.CRUD.REPRESENTANTES.COMUN.REPRESENTANTES}`, {
        params: {
          id: sesion._id
        }
      });
    } catch (error) {
      throw error;
    }
  }

  registraRepresentante(representanteID: string, sesionID: string) {
    try {
      return this.httpClient
        .post<ISesion>(`${this.URL_SERVER.HOST}${this.SESIONES_CONTROLLER.COMUN}${this.SESIONES_CONTROLLER.CRUD.REPRESENTANTES.COMUN.REPRESENTANTES}`, {
          representanteID,
          sesionID
        });
    } catch (error) {
      throw error;
    }
  }

  retornaListaRepresentantesSesion(sesion: ISesion) {
    try {
      return this.httpClient
      .get<any []>(`${this.URL_SERVER.HOST}${this.SESIONES_CONTROLLER.COMUN}${this.SESIONES_CONTROLLER.CRUD.REPRESENTANTES.COMUN.REPRESENTANTES}${this.SESIONES_CONTROLLER.CRUD.REPRESENTANTES.CRUD.LISTA}`, {
        params: {
          sesionID: sesion._id
        }
      });
    } catch (error) {
      throw error;
    }
  }

  retirarRepresentanteSesion(sesionID: string, representanteID: string) {
    try {
      return this.httpClient
      .post<ISesion>(`${this.URL_SERVER.HOST}${this.SESIONES_CONTROLLER.COMUN}${this.SESIONES_CONTROLLER.CRUD.REPRESENTANTES.COMUN.REPRESENTANTES}${this.SESIONES_CONTROLLER.CRUD.REPRESENTANTES.CRUD.RETIRAR}`, {
        sesionID,
        representanteID
      });
    } catch (error) {
      throw error;
    }
  }

  retornaSesionesRepresentantePorId(usuario: string) {
    return this.httpClient.get<ISesion []>(`${this.URL_SERVER.HOST}${this.SESIONES_CONTROLLER.COMUN}${this.SESIONES_CONTROLLER.CRUD.REPRESENTANTES.COMUN.REPRESENTANTE}`, {
      params: {
        usuario
      }
    });
  }

}
