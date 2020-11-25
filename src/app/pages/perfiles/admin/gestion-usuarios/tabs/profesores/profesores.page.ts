import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilesService } from 'src/app/services/perfiles/perfiles.service';
import { UsuariosPage } from '../../usuarios/usuarios.page';

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
    await this.verificaCambioUsuarios();
    await this.retornaUsuarios()
  }

  private async retornaUsuarios() {
    this.usuarios = await this.perfilesService.retornaUsuarios(2);
  }
  
  private async verificaCambioUsuarios() {
    // verificando emite...
    this.perfilesService.creoUsuario.subscribe(async (result: boolean) => {
      if(result) {
        await this.retornaUsuarios()
      }
    });    
  }

  public async registraUsuario() {
    const modal = await this.modalController.create({
      component: UsuariosPage,
      componentProps: {
        tipoPerfil: 2
      }
    });
    await modal.present();
  }

  public async actulizar() {}

  public async eliminar() {}

}
