import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from "moment";
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-sesion-virtual',
  templateUrl: './sesion-virtual.page.html',
  styleUrls: ['./sesion-virtual.page.scss'],
})
export class SesionVirtualPage implements OnInit {

  public usuarios: number = 0;
  public message: string = '';
  public messages: string[] = [];

  constructor(
    private toastController: ToastController,
    private usuarioService: UsuarioService

  ) { }

  ngOnInit() {
    let nombreUsuario: string = `${moment().utc().format('YYYY-MM-DD HH:mm:ss')}`;
    // retornamos el numero de usuarios conectados...
    this.usuarioService
      .obtenerUsuarios()
      .subscribe((usuarios: number) => {
        this.usuarios = usuarios;
    });

    this.usuarioService.receiveChat().subscribe((message: string) => {
      this.messages.push(message);
    });

  }

  addChat(){
    this.messages.push(this.message);
    this.usuarioService.sendChat(this.message);
    this.message = '';
  }

}
