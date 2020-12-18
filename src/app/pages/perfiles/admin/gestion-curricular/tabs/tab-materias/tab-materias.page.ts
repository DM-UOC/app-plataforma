import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { IMateria } from 'src/app/interfaces/materia.interface';
import { MateriasService } from 'src/app/services/materias/materias.service';
import { ModMateriasPage } from '../../mod-materias/mod-materias.page';

@Component({
  selector: 'app-tab-materias',
  templateUrl: './tab-materias.page.html',
  styleUrls: ['./tab-materias.page.scss'],
})
export class TabMateriasPage implements OnInit {

  public materias: IMateria [] = [];

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private materiasService: MateriasService
  ) { }

  async ngOnInit() {
    await this.verificaCambioMaterias();
    await this.retornaMaterias();    
  }

  public retornaMaterias() {
    // retonando observable...
    this.materiasService.retornaMaterias().subscribe(materias => {
      // guarda en la variable...
      this.materias = materias;
    });
  }

  private async verificaCambioMaterias() {
    // verificando emite...
    this.materiasService.creoMateria.subscribe(async (result: boolean) => {
      if(result) {
        await this.retornaMaterias()
      }
    });    
  }

  public async registraMateria(materia: IMateria) {
    // abriendo el modal...
    const modal = await this.modalController.create({
      component: ModMateriasPage,
      componentProps: {
        materia
      }
    });
    await modal.present();
  }

  public async actualizar(materia: IMateria) {
    try {
      await this.registraMateria(materia);
    } catch (error) {
      throw error;
    }
  }

  private async emiteCambioMateria() {
    // emito el cambio...
    this.materiasService.actualizaListado = true;
    this.materiasService.creoMateria.emit(this.materiasService.actualizaListado); 
  }

  public async eliminar(materia: IMateria) {
    try {
      const alert = await this.alertController.create({
        cssClass: 'alert',
        message: `Seguro de eliminar: ${materia.descripcion}?`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: blah => {
            },
          },
          {
            text: 'Eliminar',
            handler: async () => {
              // presentamos el modal...
              this.materiasService.eliminaMateria(materia._id);
              // emite el refresco de usuarios...
              await this.emiteCambioMateria();
            },
          },
        ],
      });
      // presentando la alerta...
      await alert.present();      
    } catch (error) {
      throw error;
    }
  }

}
