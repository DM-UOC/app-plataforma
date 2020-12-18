import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ILectivo } from 'src/app/interfaces/lectivos/lectivo.interface';
import { IParcial } from 'src/app/interfaces/lectivos/parcial.interface';
import { CREDENCIALES_SERVIDOR, LECTIVOS_CONTROLLER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LectivosService {

  /**
  * variables que verifican si hay cambios en el contador d preguntas contestadas
  */
  public actualizaListado = false;
  @Output() creoLectivo: EventEmitter<boolean> = new EventEmitter();

  private URL_SERVER = {
    HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
  };
  private LECTIVOS_CONTROLLER = {
    COMUN: `${LECTIVOS_CONTROLLER.COMUN}`,
    CRUD: {
      PARCIALES: {
        COMUN: `${LECTIVOS_CONTROLLER.CRUD.PARCIALES.COMUN}`
      }
    }
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public async retornarTodos() {
    return await this.httpClient.get<ILectivo []>(`${this.URL_SERVER.HOST}${this.LECTIVOS_CONTROLLER.COMUN}`).toPromise();
  }

  public async creaLectivo(lectivo: ILectivo) {
    try {
      return await this.httpClient.post(`${this.URL_SERVER.HOST}${this.LECTIVOS_CONTROLLER.COMUN}`, lectivo).toPromise();
    } catch (error) {
      throw error;
    }
  }

  public async eliminarLectivo(lectivoId: string) {
    try {
      return await this.httpClient
      .delete(`${this.URL_SERVER.HOST}${this.LECTIVOS_CONTROLLER.COMUN}/${lectivoId}`).subscribe(resultado => {
        return resultado;
      });
    } catch (error) {
      throw error;
    }
  }

  public async creaParcial(lectivo: ILectivo) {
    try {
      return await this.httpClient
      .post(`${this.URL_SERVER.HOST}${this.LECTIVOS_CONTROLLER.COMUN}${this.LECTIVOS_CONTROLLER.CRUD.PARCIALES.COMUN}`, lectivo)
      .toPromise();
    } catch (error) {
      throw error;
    }
  }

  public async actualizaParcial(parcial: IParcial) {
    try {
      return await this.httpClient
      .post(`${this.URL_SERVER.HOST}${this.LECTIVOS_CONTROLLER.COMUN}${this.LECTIVOS_CONTROLLER.CRUD.PARCIALES.COMUN}`, parcial)
      .toPromise();      
    } catch (error) {
      throw error;
    }
  }
}
