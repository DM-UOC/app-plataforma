import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IToken } from 'src/app/interfaces/comuns/token.interface';
import { ITarea } from 'src/app/interfaces/tareas/tarea.interface';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
import { TareasService } from 'src/app/services/tareas/tareas.service';
import { ModGestionTareasPage } from '../../mod-gestion-tareas/mod-gestion-tareas.page';
import { ModListadoParticipantesTareaPage } from '../../mod-listado-participantes-tarea/mod-listado-participantes-tarea.page';
import { ModParticipantesTareaPage } from '../../mod-participantes-tarea/mod-participantes-tarea.page';

@Component({
  selector: 'app-tab-crear-tarea',
  templateUrl: './tab-crear-tarea.page.html',
  styleUrls: ['./tab-crear-tarea.page.scss'],
})
export class TabCrearTareaPage implements OnInit {

  tareas: ITarea[] = [];
  private profesor: IToken;

  constructor(
    private tareasService: TareasService,
    private modalController: ModalController,
    private seguridadService: SeguridadService
  ) { }

  ngOnInit() {
    // recupera info del usuario...
    this.recuperaInformacionUsuario();
    // retornando tareas...
    this.retornaTareas();
    // verifica cambio datos...
    this.verificaCambioTareas();    
  }

  private recuperaInformacionUsuario() {
    // información del usuario...
    this.profesor = this.seguridadService.getUsuarioToken();
  }

  private retornaTareas() {
    this.tareasService
      .retornaTareas()
      .subscribe(tareas => this.tareas = tareas);
  }

  async registraTarea(tarea: ITarea) {
    try {
      const modal = await this.modalController.create({
        component: ModGestionTareasPage,
        componentProps: {
          tarea,
          profesor: this.profesor
        }
      });
      await modal.present();
    } catch (error) {
      throw error;
    }
  }

  private verificaCambioTareas() {
    // verificando emite...
    this.tareasService.creoTarea.subscribe(async (result: boolean) => {
      if(result) {
        this.retornaTareas();
      }
    });    
  }

  async despliegaRepresentante(tarea: ITarea) {
    try {
      // abriendo el modal...
      const modal = await this.modalController.create({
        component: ModListadoParticipantesTareaPage,
        componentProps: {
          tarea
        }
      });
      // presentando modal...
      await modal.present();
      // recibiendo datos desde el modal...
      const { data } = await modal.onDidDismiss();
    } catch (error) {
      throw error;
    }
  }

  async agregaRepresentanteTarea(tarea: ITarea) {
    // abriendo el modal...
    const modal = await this.modalController.create({
      component: ModParticipantesTareaPage,
      componentProps: {
        tarea
      }
    });
    // presentando modal...
    await modal.present();
  }

}
