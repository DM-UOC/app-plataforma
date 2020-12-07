import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ILectivo } from 'src/app/interfaces/lectivos/lectivo.interface';
import { LectivosService } from 'src/app/services/lectivos/lectivos.service';
import { ModLectivosPage } from '../../mod-lectivos/mod-lectivos.page';
import { ModParcialesPage } from '../../mod-parciales/mod-parciales.page';

@Component({
  selector: 'app-tab-lectivos',
  templateUrl: './tab-lectivos.page.html',
  styleUrls: ['./tab-lectivos.page.scss'],
})
export class TabLectivosPage implements OnInit {

  public lectivos: ILectivo[] = [];

  constructor(
    private modalController: ModalController,
    private lectivosService: LectivosService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.verificaCambioLectivos();
    await this.retornarLectivos();      
  }

  public async retornarLectivos() {
    this.lectivos = await this.lectivosService.retornarTodos();
  }

  private async verificaCambioLectivos() {
    // verificando emite...
    this.lectivosService.creoLectivo.subscribe(async (result: boolean) => {
      if(result) {
        await this.retornarLectivos()
      }
    });    
  }

  public async registraLectivo() {
    // abriendo el modal...
    const modal = await this.modalController.create({
      component: ModLectivosPage,
      componentProps: {
        tipoPerfil: 1
      }
    });
    await modal.present();
  }

  public async registraParcial(lectivo: ILectivo) {
    // abriendo el modal...
    const modal = await this.modalController.create({
      component: ModParcialesPage,
      componentProps: {
        lectivo
      }
    });
    // presentando el modal...
    await modal.present();
  }
  
  public async actualizar(lectivo: ILectivo) {
    try {
      
    } catch (error) {
      throw error;
    }
  }

  public async eliminar(lectivo: ILectivo) {
    try {
      
    } catch (error) {
      throw error;
    }
  }

  public async agregaParcial(lectivo: ILectivo) {
    try {
      await this.registraParcial(lectivo);
    } catch (error) {
      throw error;
    }
  }

  public async parcialesDetalle(lectivo: ILectivo) {
    try {
      let navigationExtras: NavigationExtras = {
        state: {
          lectivo
        }
      };
      // navegando a la pagina...
      this.router.navigate(['/parciales-detalle'], navigationExtras);      
    } catch (error) {
      throw error;
    }
  }

}
