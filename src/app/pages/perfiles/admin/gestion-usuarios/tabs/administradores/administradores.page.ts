import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilesService } from 'src/app/services/perfiles/perfiles.service';
import { UsuariosPage } from '../../../usuarios/usuarios.page';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.page.html',
  styleUrls: ['./administradores.page.scss'],
})
export class AdministradoresPage implements OnInit {

  public usuarios: any = [];

  constructor(
    private perfilesService: PerfilesService,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    await this.retornaUsuarios();
  }

  public async retornaUsuarios() {
    this.usuarios = await this.perfilesService.retornaAdministradores();    
  }

  public async registraUsuario() {
    const modal = await this.modalController.create({
      component: UsuariosPage,
      
    });
    await modal.present();
  }

  public async actulizar() {}

  public async eliminar() {}

}
