import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { IToken } from 'src/app/interfaces/comuns/token.interface';
import { IUsuarioDataSocket, IUsuarioToken } from 'src/app/interfaces/login.interface';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { UtilitariosService } from 'src/app/services/utilitarios.service';

@Component({
  selector: 'app-sala-virtual',
  templateUrl: './sala-virtual.page.html',
  styleUrls: ['./sala-virtual.page.scss'],
})
export class SalaVirtualPage implements OnInit {

  token: IToken;
  
  constructor(
    private seguridadService: SeguridadService,
    private usuarioService: UsuarioService,    
  ) {}

  ngOnInit() {
    // agrega el usuario...
    this.agregaUsuariosSesion();
  }

  private agregaUsuariosSesion() {
    try {
      // lee  usuarios socket coneccion...
      this.token = this.seguridadService.getUsuarioToken();
      // agrega al soket la información del usuario...
      this.usuarioService.agregarUsuario(this.token);
    } catch (error) {
      throw error;
    }
  }

}
