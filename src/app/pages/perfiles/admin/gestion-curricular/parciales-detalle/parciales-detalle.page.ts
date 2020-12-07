import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ILectivo } from 'src/app/interfaces/lectivos/lectivo.interface';
import { IParcial } from 'src/app/interfaces/lectivos/parcial.interface';
import { ModParcialesDetallePage } from '../mod-parciales-detalle/mod-parciales-detalle.page';

@Component({
  selector: 'app-parciales-detalle',
  templateUrl: './parciales-detalle.page.html',
  styleUrls: ['./parciales-detalle.page.scss'],
})
export class ParcialesDetallePage implements OnInit {

  public lectivo: ILectivo;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalController: ModalController
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // parametro lectivo...
        this.lectivo = this.router.getCurrentNavigation().extras.state.lectivo;
      }
    });
   }

  async ngOnInit() {
  }

  public async actualizar(parcial: IParcial) {
    try {
      // actualizando el parcial...
      this.actualizarParcial(parcial);
    } catch (error) {
      throw error;
    }
  }

  public async eliminar(parcial: IParcial) {
    try {
      
    } catch (error) {
      throw error;
    }
  }
  
  public async actualizarParcial(parcial: IParcial) {
    // abriendo el modal...
    const modal = await this.modalController.create({
      component: ModParcialesDetallePage,
      componentProps: {
        lectivo: this.lectivo,
        parcial
      }
    });
    // presentando el modal...
    await modal.present();
  }

}
