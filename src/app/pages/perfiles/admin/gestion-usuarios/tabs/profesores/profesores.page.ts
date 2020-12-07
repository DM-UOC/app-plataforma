import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { IUsuario } from 'src/app/interfaces/login.interface';
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
    private modalController: ModalController,
    private alertController: AlertController
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

  public async registraUsuario(usuario: IUsuario) {
    const modal = await this.modalController.create({
      component: UsuariosPage,
      componentProps: {
        tipoPerfil: 2,
        usuario
      }
    });
    await modal.present();
  }

  public async actualizar(usuario: IUsuario) {
    try {
      // presentamos el modal...
      await this.registraUsuario(usuario);      
    } catch (error) {
      throw error;
    }
  }

  public async eliminar(usuario: IUsuario) {
    try {
      const alert = await this.alertController.create({
        cssClass: 'alert',
        message: `Seguro de eliminar al usuario: ${usuario.nombre_completo}?`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: blah => {
              console.log('Confirm Cancel: blah');
            },
          },
          {
            text: 'Eliminar',
            handler: async () => {
              // presentamos el modal...
              await this.perfilesService.eliminaUsuario(usuario._id);
              // emite el refresco de usuarios...
              await this.emiteCambioUsuario();
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

  private async emiteCambioUsuario() {
    // emito el cambio...
    this.perfilesService.actualizaListado = true;
    this.perfilesService.creoUsuario.emit(this.perfilesService.actualizaListado); 
  }

}
