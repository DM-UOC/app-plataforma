import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IProfesor } from 'src/app/interfaces/profesores/profesor.interface';
import { ProfesoresService } from 'src/app/services/perfiles/profesores/profesores.service';

@Component({
  selector: 'app-profesor-materias-detalle',
  templateUrl: './profesor-materias-detalle.page.html',
  styleUrls: ['./profesor-materias-detalle.page.scss'],
})
export class ProfesorMateriasDetallePage implements OnInit {

  public profesor: IProfesor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalController: ModalController,
    private profesoresService: ProfesoresService
  ) { 
    // recogiendo parámetros...
    this.activatedRoute.queryParams.subscribe(params => {
      // verificando bandera state...
      if (this.router.getCurrentNavigation().extras.state) {
        // parametro lectivo...
        this.profesor = this.router.getCurrentNavigation().extras.state.profesor;
      }
    });
  }

  ngOnInit() {
    try {
      // retorna datos profesores...
      this.retornaMateriasProfesores();
    } catch (error) {
      throw error;
    }
  }

  private retornaMateriasProfesores() {
    try {
      // retornando datos tipo suscribe...
      this.profesoresService.retornaMateriasProfesores(this.profesor.usuario_id)
      .subscribe(profesor => {
        this.profesor = profesor;
      });
    } catch (error) {
      throw error;
    }
  }
}
