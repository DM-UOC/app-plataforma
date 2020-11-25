import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClientesService } from 'src/app/services/perfiles/clientes/clientes.service';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
import { CliHijosPage } from '../cli-hijos/cli-hijos.page';

@Component({
  selector: 'app-gestion-hijos',
  templateUrl: './gestion-hijos.page.html',
  styleUrls: ['./gestion-hijos.page.scss'],
})
export class GestionHijosPage implements OnInit {

  public representante: any;
  public hijos: any = [];
  public dataToken: any;
  private representanteData: any;

  constructor(
    private clientesService: ClientesService,
    private seguridadService: SeguridadService,
    private modalController: ModalController
  ) { 
  }

  async ngOnInit() {
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

  public async registraHijo() {
    // abriendo el modal...
    const modal = await this.modalController.create({
      component: CliHijosPage,
      componentProps: {
        tipoPerfil: 3,
        representante: this.representanteData

      }
    });
    await modal.present();
    // recibiendo datos desde el modal...
    const { data } = await modal.onDidDismiss();
    // guardando nuevamente información del representante...
    this.clientesService.setRepresentante(data.representante);
  }

}
