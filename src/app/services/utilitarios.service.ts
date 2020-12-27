import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilitariosService {

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  public async retornaMensajeAlerta(OBJECTO_MENSAJES_ALERTA: object) {
    // instancia...
    const alerta = await this.alertController.create(OBJECTO_MENSAJES_ALERTA);
    // presentar...
    await alerta.present();
  }

  async retornaMensajeCorto(OBJECTO_MENSAJES_TOAST: object) {
    // configurando...
    const toast = await this.toastController.create(OBJECTO_MENSAJES_TOAST);
    // presentado el mensaje...
    await toast.present();
  }
}
