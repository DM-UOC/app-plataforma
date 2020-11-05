import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilitariosService {

  constructor(
    private alertController: AlertController
  ) { }

  public async retornaMensajeAlerta(OBJECTO_MENSAJES_ALERTA: object) {
    // instancia...
    const alerta = await this.alertController.create(OBJECTO_MENSAJES_ALERTA);
    // presentar...
    await alerta.present();
  }
}
