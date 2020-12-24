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

 private URL_SERVER = {
   HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
 };
 private SESIONES_CONTROLLER = {
   COMUN: `${SESIONES_CONTROLLER.COMUN}`,
   CRUD: {
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
  
}
