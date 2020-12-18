import { Component, Input, OnInit } from '@angular/core';
import { IMateria } from 'src/app/interfaces/materia.interface';
import { IProfesor } from 'src/app/interfaces/profesores/profesor.interface';
import { MateriasService } from 'src/app/services/materias/materias.service';
import { ProfesoresService } from 'src/app/services/perfiles/profesores/profesores.service';

@Component({
  selector: 'app-mod-profesor-materias',
  templateUrl: './mod-profesor-materias.page.html',
  styleUrls: ['./mod-profesor-materias.page.scss'],
})
export class ModProfesorMateriasPage implements OnInit {

  @Input() profesor: IProfesor;
  materias: any[] = []
  
  constructor(
    private materiasService: MateriasService,
    private profesoresService: ProfesoresService
  ) { }

  ngOnInit() {
    try {
      // recuperando datos de las materias que no esten asociadas al profesor...
      this.retornaMaterias();
    } catch (error) {
      throw error
    }
  }

  retornaMaterias() {
    try {
      this.profesoresService.retornaMateriasProfesores(this.profesor.usuario_id)
      .subscribe({
        next: (materias) => {
          // almacena las materias...
          this.materias = materias
        },
        error: (error) => {
          // imprime el erro....
          console.log(error);
        }
      });      
    } catch (error) {
      throw error;
    }
  }

  agregarMateriaProfesor(materia: IMateria) {
    try {
      // registra la materia y presenta la lista actualizada...
      this.profesoresService.registraMateria(this.profesor.usuario_id, materia)
      .subscribe(materias => {
        this.materias = materias;
      });
    } catch (error) {
      throw error;
    }
  }
  
}
