import { Component, OnInit } from '@angular/core';
import { Plugins } from "@capacitor/core";
import { AlertController, ModalController } from '@ionic/angular';
import { IToken } from 'src/app/interfaces/comuns/token.interface';
import { IUsuarioToken } from 'src/app/interfaces/login.interface';
import { ISesion } from 'src/app/interfaces/sesiones/sesion.interface';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
import { SesionesService } from 'src/app/services/sesiones/sesiones.service';
import { ModListadoParticipantesSesionPage } from '../mod-listado-participantes-sesion/mod-listado-participantes-sesion.page';
import { ModSesionParticipantesPage } from '../mod-sesion-participantes/mod-sesion-participantes.page';
import { ModSesionesPage } from '../mod-sesiones/mod-sesiones.page';
const { LocalNotifications } = Plugins;

@Component({
  selector: 'app-gestion-sesiones-virtuales',
  templateUrl: './gestion-sesiones-virtuales.page.html',
  styleUrls: ['./gestion-sesiones-virtuales.page.scss'],
})
export class GestionSesionesVirtualesPage implements OnInit {

  public sesiones: ISesion [] = [];
  private usuarioToken: IToken;

  constructor(
    private modalController: ModalController,
    private seguridadService: SeguridadService,
    private sesionesService: SesionesService,
    private alertController: AlertController
  ) { }

  async ngOnInit() {

    // recogiendo datos del usuario...
    this.usuarioToken = this.seguridadService.getUsuarioToken();
    // prueba de notificaciones...
    await LocalNotifications.requestPermission();
    // emisión de cambios...
    this.verificaCambioSesion();
    // retorna las sesiones...
    this.retornaSesionesProfesor();

  }



  private verificaCambioSesion() {
    // verificando emite...
    this.sesionesService.creoSesion.subscribe(async (result: boolean) => {
      // verifica la bandera...
      if(result) {
        // actualiza el listado...
        this.retornaSesionesProfesor();
      }
    });    
  }

  private retornaSesionesProfesor() {
    this.sesionesService.retornaSesionesProfesor(this.usuarioToken.usuario)
      .subscribe(sesiones => this.sesiones = sesiones);
  }

  async participantes(sesion: ISesion) {
    // abriendo el modal...
    const modal = await this.modalController.create({
      component: ModSesionParticipantesPage,
      componentProps: {
        sesion
      }
    });
    // presentando modal...
    await modal.present();
  }

  async registrarSesion(sesion: ISesion) {
    try {
      // abriendo el modal...
      const modal = await this.modalController.create({
        component: ModSesionesPage,
        componentProps: {
          sesion,
          usuario: this.usuarioToken.usuario
        }
      });
      // presentando modal...
      await modal.present();
      // recibiendo datos desde el modal...
      const { data } = await modal.onDidDismiss();
      // emite el refresco de sesiones...
      await this.emiteCambioSesion();      
    } catch (error) {
      throw error;
    }
  }

  public async actualizar(sesion: ISesion) {
    try {
      await this.registrarSesion(sesion);
    } catch (error) {
      throw error;
    }
  }

  private async emiteCambioSesion() {
    // emito el cambio...
    this.sesionesService.actualizaListado = true;
    this.sesionesService.creoSesion.emit(this.sesionesService.actualizaListado); 
  }

  public async eliminar(sesion: ISesion) {
    try {
      const alert = await this.alertController.create({
        cssClass: 'alert',
        message: `Seguro de eliminar: ${sesion.descripcion}?`,
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
              this.sesionesService.eliminaMateria(sesion._id);
              // emite el refresco de sesiones...
              await this.emiteCambioSesion();
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

  async despliegaRepresentante(sesion: ISesion) {
    try {
      // abriendo el modal...
      const modal = await this.modalController.create({
        component: ModListadoParticipantesSesionPage,
        componentProps: {
          sesion
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

}
