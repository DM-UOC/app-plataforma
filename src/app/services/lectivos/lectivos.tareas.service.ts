import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { ITarea } from 'src/app/interfaces/tareas/tarea.interface';
import { CREDENCIALES_SERVIDOR, LECTIVOS_TAREAS_CONTROLLER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LectivosTareasService {

  /**
  * variables que verifican si hay cambios en el contador d preguntas contestadas
  */
  public actualizaListado = false;
  @Output() creoRepresentante: EventEmitter<boolean> = new EventEmitter();

  private URL_SERVER = {
    HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
  };
  private LECTIVOS_TAREAS_CONTROLLER = {
    COMUN: `${LECTIVOS_TAREAS_CONTROLLER.COMUN}`,
    CRUD: {
      REPRESENTANTES: {
        COMUN: `${LECTIVOS_TAREAS_CONTROLLER.CRUD.REPRESENTANTES.COMUN}`,
        CRUD: {
          LISTA: `${LECTIVOS_TAREAS_CONTROLLER.CRUD.REPRESENTANTES.CRUD.LISTA}`,
          RETIRAR: `${LECTIVOS_TAREAS_CONTROLLER.CRUD.REPRESENTANTES.CRUD.RETIRAR}`
        }
      }
    }
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  retornaRepresentantesTareas(tarea: ITarea) {
    try {
      return this.httpClient
      .get(`${this.URL_SERVER.HOST}${this.LECTIVOS_TAREAS_CONTROLLER.COMUN}${this.LECTIVOS_TAREAS_CONTROLLER.CRUD.REPRESENTANTES.COMUN}`, {
        params: {
          id: tarea._id
        }
      });
    } catch (error) {
      throw error;
    }
  }

  retornaListaRepresentantesTareas(tarea: ITarea) {
    try {
      return this.httpClient
      .get<any []>(`${this.URL_SERVER.HOST}${this.LECTIVOS_TAREAS_CONTROLLER.COMUN}${this.LECTIVOS_TAREAS_CONTROLLER.CRUD.REPRESENTANTES.COMUN}${this.LECTIVOS_TAREAS_CONTROLLER.CRUD.REPRESENTANTES.CRUD.LISTA}`, {
        params: {
          tareaId: tarea._id
        }
      });
    } catch (error) {
      throw error;
    }
  }

  registraRepresentante(representanteId: string, tareaId: string) {
    try {
      return this.httpClient
        .post(`${this.URL_SERVER.HOST}${this.LECTIVOS_TAREAS_CONTROLLER.COMUN}${this.LECTIVOS_TAREAS_CONTROLLER.CRUD.REPRESENTANTES.COMUN}`, {
          representanteId,
          tareaId
        });
    } catch (error) {
      throw error;
    }
  }

  retirarRepresentanteTarea(lectivoTareaId: string, representanteId: string) {
    try {
      return this.httpClient
      .post(`${this.URL_SERVER.HOST}${this.LECTIVOS_TAREAS_CONTROLLER.COMUN}${this.LECTIVOS_TAREAS_CONTROLLER.CRUD.REPRESENTANTES.COMUN}${this.LECTIVOS_TAREAS_CONTROLLER.CRUD.REPRESENTANTES.CRUD.RETIRAR}`, {
        lectivoTareaId,
        representanteId
      });
    } catch (error) {
      throw error;
    }
  }

}
