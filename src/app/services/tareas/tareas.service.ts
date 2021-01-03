import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { IToken } from 'src/app/interfaces/comuns/token.interface';
import { ITarea } from 'src/app/interfaces/tareas/tarea.interface';
import { CREDENCIALES_SERVIDOR, TAREAS_CONTROLLER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  /**
  * variables que verifican si hay cambios en el contador d preguntas contestadas
  */
  public actualizaListado = false;
  @Output() creoTarea: EventEmitter<boolean> = new EventEmitter();

  private URL_SERVER = {
    HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
  };
  private TAREAS_CONTROLLERS = {
    COMUN: `${TAREAS_CONTROLLER.COMUN}`,
    CRUD: {
      CREAR: ``
    }
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  retornaTareas() {
    // return...
    return this.httpClient
      .get<ITarea []>(`${this.URL_SERVER.HOST}${this.TAREAS_CONTROLLERS.COMUN}`);
  }

  crearTarea(tarea: ITarea, profesor: IToken) {
    try {
      // desestructura el objeto profesor...
      const { usuario, nombres } = profesor;
      // retornando observable...
      return this.httpClient
      .post<ITarea>(`${this.URL_SERVER.HOST}${this.TAREAS_CONTROLLERS.COMUN}`, {
        tarea,
        profesor: {
          usuario,
          nombres
        }
      });
    } catch (error) {
      throw error;
    }
  }

  actualizaTarea(tareaActualiza: ITarea, tareaOriginal: ITarea) {
    try {
      // retornando los resultados...
      return this.httpClient
        .put<ITarea>(`${this.URL_SERVER.HOST}${this.TAREAS_CONTROLLERS.COMUN}/${tareaOriginal._id}`, tareaActualiza);      
    } catch (error) {
      throw error;
    }
  }

}
