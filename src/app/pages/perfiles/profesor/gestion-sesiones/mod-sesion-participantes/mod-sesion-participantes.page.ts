import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ISesion } from 'src/app/interfaces/sesiones/sesion.interface';
import { SesionesService } from 'src/app/services/sesiones/sesiones.service';
import { UtilitariosService } from 'src/app/services/utilitarios.service';
import { Plugins } from "@capacitor/core";
const { LocalNotifications } = Plugins;

@Component({
  selector: 'app-mod-sesion-participantes',
  templateUrl: './mod-sesion-participantes.page.html',
  styleUrls: ['./mod-sesion-participantes.page.scss'],
})
export class ModSesionParticipantesPage implements OnInit {

  @Input()sesion: ISesion;
  representantes: any[] = [];
  muestraHijos: boolean = true;

  constructor(
    private modalController: ModalController,
    private sesionesService: SesionesService,
    private utilitariosService: UtilitariosService
  ) { }

  async ngOnInit() {
    this.retornaParticipantesSesion();
    this.verificaCambioRepresentantes();
    // prueba de notificaciones...
    await LocalNotifications.requestPermission();
  }

  private retornaParticipantesSesion() {
    this.sesionesService
      .retornaRepresentantesSesion(this.sesion)
      .subscribe((representantes: any) => {
        this.representantes = representantes;
      });
  }

  async cerrarModal() {
    await this.modalController.dismiss();
  }

  despliegaHijos() {
    // evento para mostrar y ocultar detalle...
    if(this.muestraHijos) {
      this.muestraHijos = false;
    }
    else {
      this.muestraHijos = true;
    }
  }

  agregarRepresentante(representante: any) {
    try {
      this.sesionesService
      .registraRepresentante(representante._id, this.sesion._id)
      .subscribe(sesion => {
        this.sesion = sesion;
        this.emiteCambioSesion();
        this.verificaCambioRepresentantes();
        // presnetamos el mensaje de exito...
        this.utilitariosService.retornaMensajeCorto({
          message: 'El participante fue agregado correctamente a la sesion: ' + this.sesion.descripcion,
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
        this.retornaParticipantesSesion();
      }
    });    
  }

  private async emiteCambioSesion() {
    // emito el cambio...
    this.sesionesService.actualizaListado = true;
    this.sesionesService.creoRepresentante.emit(this.sesionesService.actualizaListado); 
    // emito el cambio...
    this.sesionesService.creoSesion.emit(this.sesionesService.actualizaListado); 
  }

}
