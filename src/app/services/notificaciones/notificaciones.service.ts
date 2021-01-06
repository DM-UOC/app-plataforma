import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { INotificacion } from 'src/app/interfaces/notificaciones/notificacion.interface';
import { CREDENCIALES_SERVIDOR, NOTIFICACIONES_CONTROLLER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  /**
  * variables que verifican si hay cambios en el contador d preguntas contestadas
  */
  public actualizaListado = false;
  @Output() creoTarea: EventEmitter<boolean> = new EventEmitter();

  private URL_SERVER = {
    HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
  };

  private NOTIFICACIONES_CONTROLLERS = {
    COMUN: `${NOTIFICACIONES_CONTROLLER.COMUN}`,
    CRUD: {
      REPRESENTANTE: {
        COMUN: `${NOTIFICACIONES_CONTROLLER.CRUD.REPRESENTANTE.COMUN}`,
        CRUD: {
          LISTA: `${NOTIFICACIONES_CONTROLLER.CRUD.REPRESENTANTE.CRUD.LISTA}`
        }
      }
    }
  };

  notificaciones: INotificacion [] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  retornaNoticiacionesPorRepresentante(id: string) {
    // return...
    return this.httpClient
      .get<INotificacion []>(`${this.URL_SERVER.HOST}${this.NOTIFICACIONES_CONTROLLERS.COMUN}${this.NOTIFICACIONES_CONTROLLERS.CRUD.REPRESENTANTE.COMUN}/${id}`);
  }

  retornaNotificacionesRepresentantePorId(usuario: string) {
    return this
    .httpClient
    .get<INotificacion []>(`${this.URL_SERVER.HOST}${this.NOTIFICACIONES_CONTROLLERS.COMUN}${this.NOTIFICACIONES_CONTROLLERS.CRUD.REPRESENTANTE.COMUN}${this.NOTIFICACIONES_CONTROLLERS.CRUD.REPRESENTANTE.CRUD.LISTA}/${usuario}`);
  }

}
