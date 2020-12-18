import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMateria } from 'src/app/interfaces/materia.interface';
import { IProfesor } from 'src/app/interfaces/profesores/profesor.interface';
import { CREDENCIALES_SERVIDOR, PERFILES_CONTROLLER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  private URL_SERVER = {
    HOST: `${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`
  };
  private PERFILES_CONTROLLERS = {
    COMUN: {
      PROFESORES: `${PERFILES_CONTROLLER.COMUN.PROFESORES}`
    },
    CRUD: {
      PROFESORES: {
        MATERIAS: `${PERFILES_CONTROLLER.CRUD.PROFESORES.MATERIAS}`,
        AGREGAR: `${PERFILES_CONTROLLER.CRUD.PROFESORES.AGREGAR}`
      }
    }
  };
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public retornaMateriasProfesores(usuario_id: string) {
    try {
      return this.httpClient
      .get<IProfesor []>(`${this.URL_SERVER.HOST}${this.PERFILES_CONTROLLERS.COMUN.PROFESORES}${this.PERFILES_CONTROLLERS.CRUD.PROFESORES.MATERIAS}`, {
        params: {
          usuario_id
        }
      });
    } catch (error) {
      throw error;
    }
  }

  registraMateria(usuario_id: string, materia: IMateria) {
    try {
      return this.httpClient
      .post<IProfesor []>(`${this.URL_SERVER.HOST}${this.PERFILES_CONTROLLERS.COMUN.PROFESORES}${this.PERFILES_CONTROLLERS.CRUD.PROFESORES.AGREGAR}`, {
        usuario_id,
        materia
      });
    } catch (error) {
      throw error;
    }
  }

}
