import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
    private materiasService: MateriasService
  ) { }

  async ngOnInit() {
    await this.verificaCambioMaterias();
    await this.retornaMaterias();    
  }

  public async retornaMaterias() {
    this.materias = await this.materiasService.retornaMaterias();
  }

  private async verificaCambioMaterias() {
    // verificando emite...
    this.materiasService.creoMateria.subscribe(async (result: boolean) => {
      if(result) {
        await this.retornaMaterias()
      }
    });    
  }

  public async registraMateria() {
    // abriendo el modal...
    const modal = await this.modalController.create({
      component: ModMateriasPage,
      componentProps: {
        tipoPerfil: 1
      }
    });
    await modal.present();
  }

}
