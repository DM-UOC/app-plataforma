import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { IHijo } from 'src/app/interfaces/hijo.interface';
import { ClientesService } from 'src/app/services/perfiles/clientes/clientes.service';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
import { ModHijosPage } from '../mod-hijos/mod-hijos.page';

@Component({
  selector: 'app-gestion-hijos',
  templateUrl: './gestion-hijos.page.html',
  styleUrls: ['./gestion-hijos.page.scss'],
})
export class GestionHijosPage implements OnInit {

  public representante: any;
  public hijos: IHijo[] = [];
  public dataToken: any;
  private representanteData: any;

  constructor(
    private clientesService: ClientesService,
    private seguridadService: SeguridadService,
    private modalController: ModalController,
    private alertController: AlertController
  ) { 
  }

  async ngOnInit() {
  }

  async ionViewWillEnter() {
    // recupera datos del representante...
    this.representanteData = this.clientesService.getRepresentante();
    // recuperando l usuario...
    this.dataToken = this.seguridadService.getUsuarioToken();
    // retornando listado de hijos...
    await this.retornaHijos();
    // verifica cambio datos...
    await this.verificaCambioUsuarios();
  }

  private async retornaHijos() {
    // devolviendo los hijos...
    this.representante = await this.clientesService.retornaHijosPorRepresentanteId(this.dataToken.usuario, true);
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

  public async registraHijo(hijo: IHijo) {
    // abriendo el modal...
    const modal = await this.modalController.create({
      component: ModHijosPage,
      componentProps: {
        tipoPerfil: 3,
        representante: this.representanteData,
        hijo
      }
    });
    await modal.present();
    // recibiendo datos desde el modal...
    const { data } = await modal.onDidDismiss();
    // guardando nuevamente información del representante...
    this.clientesService.setRepresentante(data.representante);
  }

  async actualizar(hijo: IHijo) {
    try {
      await this.registraHijo(hijo);
    } catch (error) {
      throw error;
    }
  }

  async eliminar(hijo: IHijo) {
    try {
      const alert = await this.alertController.create({
        cssClass: 'alert',
        message: `Seguro de eliminar a: ${hijo.nombre_completo}?`,
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
              await this.clientesService.eliminaHijo(hijo._id);
              // emite el refresco de usuarios...
              await this.emiteCambioUsuario();
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

  private async emiteCambioUsuario() {
    // emito el cambio...
    this.clientesService.actualizaListado = true;
    this.clientesService.creoUsuario.emit(this.clientesService.actualizaListado); 
  }

}
