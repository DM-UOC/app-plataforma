import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IToken } from 'src/app/interfaces/comuns/token.interface';
import { IHijo } from 'src/app/interfaces/hijo.interface';
import { ClientesService } from 'src/app/services/perfiles/clientes/clientes.service';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { ModEntregaTareaHijoPage } from '../mod-entrega-tarea-hijo/mod-entrega-tarea-hijo.page';

@Component({
  selector: 'app-mod-entrega-tareas',
  templateUrl: './mod-entrega-tareas.page.html',
  styleUrls: ['./mod-entrega-tareas.page.scss'],
})
export class ModEntregaTareasPage implements OnInit {

  public representante: any;
  public hijos: IHijo[] = [];
  private token: IToken;

  constructor(
    private modalController: ModalController,
    private seguridadService: SeguridadService,
    private clientesService: ClientesService
  ) { }

  async ngOnInit() {
    this.token = this.seguridadService.getUsuarioToken();
    // retornando listado de hijos...
    await this.retornaHijos();
    // verifica cambio datos...
    await this.verificaCambioUsuarios();
  }

  private async retornaHijos() {
    // devolviendo los hijos...
    this.representante = await this.clientesService.retornaHijosPorRepresentanteId(this.token.usuario, true);
    const { hijos } = this.representante;
    this.hijos = hijos;    
  }

  private async verificaCambioUsuarios() {
    // verificando emite...
    this.clientesService.creoUsuario.subscribe(async (result: boolean) => {
      if(result) {
        await this.retornaHijos()
      }
    });    
  }

  async cerrarModal() {
    await this.modalController.dismiss();
  }

  async entregar(hijo: IHijo) {
    // abriendo el modal...
    const modal = await this.modalController.create({
      component: ModEntregaTareaHijoPage,
      componentProps: {
        hijo
      }
    });
    await modal.present();
  }

}
