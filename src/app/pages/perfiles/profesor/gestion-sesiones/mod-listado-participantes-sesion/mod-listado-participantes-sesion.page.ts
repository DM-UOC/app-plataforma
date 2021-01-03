import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ISesion } from 'src/app/interfaces/sesiones/sesion.interface';
import { SesionesService } from 'src/app/services/sesiones/sesiones.service';
import { UtilitariosService } from 'src/app/services/utilitarios.service';

@Component({
  selector: 'app-mod-listado-participantes-sesion',
  templateUrl: './mod-listado-participantes-sesion.page.html',
  styleUrls: ['./mod-listado-participantes-sesion.page.scss'],
})
export class ModListadoParticipantesSesionPage implements OnInit {

  @Input()sesion: ISesion;
  representantes: any [] = [];

  constructor(
    private modalController: ModalController,
    private sesionesService: SesionesService,
    private utilitariosService: UtilitariosService
  ) { }

  ngOnInit() {
    this.retornaListaRepresentantesSesion();
  }

  private retornaListaRepresentantesSesion() {
    try {
      this.sesionesService
      .retornaListaRepresentantesSesion(this.sesion)
      .subscribe(representantes => {
        this.representantes = representantes;
      });
    } catch (error) {
      throw error;
    }
  }

  retirarRepresentante(representante: any) {
    try {
      this.sesionesService
      .retirarRepresentanteSesion(representante._id, representante.representantes_sesion.auditoria.representante_id)
      .subscribe((sesion: ISesion) => {
        this.sesion = sesion;
        this.emiteCambioSesion();
        this.verificaCambioRepresentantes();
        // presnetamos el mensaje de exito...
        this.utilitariosService.retornaMensajeCorto({
          message: 'El participante fue retirado correctamente de la sesion: ' + this.sesion.descripcion,
          duration: 2000
        });        
      });
    } catch (error) {
      throw error;
    }
  }

  private verificaCambioRepresentantes() {
    // verificando emite...
    this.sesionesService.creoRepresentante.subscribe(async (result: boolean) => {
      if(result) {
        this.retornaListaRepresentantesSesion();
      }
    });    
  }

  async cerrarModal() {
    await this.modalController.dismiss();
  }

  private async emiteCambioSesion() {
    // emito el cambio...
    this.sesionesService.actualizaListado = true;
    this.sesionesService.creoRepresentante.emit(this.sesionesService.actualizaListado); 
    // emito el cambio...
    this.sesionesService.creoSesion.emit(this.sesionesService.actualizaListado); 
  }

}
