import { Component, OnInit } from '@angular/core';
import { Plugins } from "@capacitor/core";
import { ModalController } from '@ionic/angular';
import { IUsuarioToken } from 'src/app/interfaces/login.interface';
import { ISesion } from 'src/app/interfaces/sesiones/sesion.interface';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
import { SesionesService } from 'src/app/services/sesiones/sesiones.service';
import { ModSesionesPage } from '../../mod-sesiones/mod-sesiones.page';
const { LocalNotifications } = Plugins;

@Component({
  selector: 'app-gestion-sesiones-virtuales',
  templateUrl: './gestion-sesiones-virtuales.page.html',
  styleUrls: ['./gestion-sesiones-virtuales.page.scss'],
})
export class GestionSesionesVirtualesPage implements OnInit {

  public sesiones: ISesion [] = [];
  private usuarioToken: IUsuarioToken;

  constructor(
    private modalController: ModalController,
    private seguridadService: SeguridadService,
    private sesionesService: SesionesService
  ) { }

  async ngOnInit() {

    // recogiendo datos del usuario...
    this.usuarioToken = this.seguridadService.getUsuarioToken();
    // prueba de notificaciones...
    await LocalNotifications.requestPermission();
    // retorna las sesiones...
    this.retornaSesionesProfesor();
    
  }

  private retornaSesionesProfesor() {
    this.sesionesService.retornaSesionesProfesor(this.usuarioToken.usuario)
      .subscribe(sesiones => this.sesiones = sesiones);
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
      await modal.present();
      // recibiendo datos desde el modal...
      const { data } = await modal.onDidDismiss();      
    } catch (error) {
      throw error;
    }
  }

}
