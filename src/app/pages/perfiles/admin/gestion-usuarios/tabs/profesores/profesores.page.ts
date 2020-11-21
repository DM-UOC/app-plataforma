import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilesService } from 'src/app/services/perfiles/perfiles.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.page.html',
  styleUrls: ['./profesores.page.scss'],
})
export class ProfesoresPage implements OnInit {

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
      componentProps: {
        tipoUsuario: 2
      }
    });
    await modal.present();
  }

  public async actulizar() {}

  public async eliminar() {}

}
