import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IToken } from 'src/app/interfaces/comuns/token.interface';
import { LectivosTareasService } from 'src/app/services/lectivos/lectivos.tareas.service';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
import { ModEntregaTareasPage } from '../../mod-entrega-tareas/mod-entrega-tareas.page';

@Component({
  selector: 'app-tab-cli-tareas',
  templateUrl: './tab-cli-tareas.page.html',
  styleUrls: ['./tab-cli-tareas.page.scss'],
})
export class TabCliTareasPage implements OnInit {

  tareas: any[] = [];
  private usuario: IToken;

  constructor(
    private lectivosTareasService: LectivosTareasService,
    private seguridadService: SeguridadService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // recupera la inforamción del usuario...
    this.usuario = this.seguridadService.getUsuarioToken();
    // retorna sesiones usuario..
    this.retornaNotificacionesRepresentantePorId();    
  }

  private retornaNotificacionesRepresentantePorId() {
    this.lectivosTareasService
      .retornaTareasRepresentantePorId(this.usuario.usuario)
      .subscribe(tareas => this.tareas = tareas);
  }

  async entregarTarea(tarea){
    // abriendo el modal...
    const modal = await this.modalController.create({
      component: ModEntregaTareasPage,
      componentProps: {
        tarea
      }
    });
    await modal.present();
  }
  
}
