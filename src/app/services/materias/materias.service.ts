import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { IMateria } from 'src/app/interfaces/materia.interface';
import { CREDENCIALES_SERVIDOR, MATERIAS_CONTROLLER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  /**
  * variables que verifican si hay cambios en el contador d preguntas contestadas
  */
  public actualizaListado = false;
  @Output() creoMateria: EventEmitter<boolean> = new EventEmitter();

  private URL_SERVER = {
    HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
  };
  private MATERIAS_CONTROLLERS = {
    COMUN: `${MATERIAS_CONTROLLER.COMUN}`,
    CRUD: {
      CREAR: ``
    }
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public retornaMaterias() {
    // return...
    return this.httpClient
      .get<IMateria []>(`${this.URL_SERVER.HOST}${this.MATERIAS_CONTROLLERS.COMUN}`);
  }


  public async creaMateria(materia: IMateria) {
    try {
      return await this.httpClient.post<IMateria>(`${this.URL_SERVER.HOST}${this.MATERIAS_CONTROLLERS.COMUN}`, materia).toPromise();
    } catch (error) {
      throw error;
    }
  }

  public actualizaMateria(materiaActualiza: IMateria, materiaOriginal: IMateria) {
    try {
      // retornando los resultados...
      return this.httpClient.put(`${this.URL_SERVER.HOST}${this.MATERIAS_CONTROLLERS.COMUN}/${materiaOriginal._id}`, materiaActualiza);
    } catch (error) {
      throw error;
    }
  }

  public async eliminaMateria(materiaId: string) {
    try {
      return await this.httpClient.delete(`${this.URL_SERVER.HOST}${this.MATERIAS_CONTROLLERS.COMUN}/${materiaId}`).toPromise();
    } catch (error) {
      throw error;
    }
  }

}
