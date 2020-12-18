import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IProfesor } from 'src/app/interfaces/profesores/profesor.interface';

@Component({
  selector: 'app-profesor-estudios-detalle',
  templateUrl: './profesor-estudios-detalle.page.html',
  styleUrls: ['./profesor-estudios-detalle.page.scss'],
})
export class ProfesorEstudiosDetallePage implements OnInit {

  public profesor: IProfesor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalController: ModalController
  ) { 
    // recogiendo parámetros...
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // parametro lectivo...
        this.profesor = this.router.getCurrentNavigation().extras.state.profesor;
      }
    });
  }

  ngOnInit() {
  }

}
