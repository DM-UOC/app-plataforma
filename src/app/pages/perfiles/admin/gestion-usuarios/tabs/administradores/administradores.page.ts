import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuariosPage } from '../../../usuarios/usuarios.page';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.page.html',
  styleUrls: ['./administradores.page.scss'],
})
export class AdministradoresPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public async registraUsuario() {
    const modal = await this.modalController.create({
      component: UsuariosPage
    });
    await modal.present();
  }
}
