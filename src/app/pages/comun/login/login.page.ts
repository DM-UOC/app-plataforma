import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';

import { UtilitariosService } from 'src/app/services/utilitarios.service';
import { OBJECTO_MENSAJES_ALERTA, SEGURIDAD_CONTROLLER } from 'src/environments/environment';
import { SeguridadService } from 'src/app/services/seguridades/seguridad.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formGroupCredenciales: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private seguridadService: SeguridadService,
    private utilitariosService: UtilitariosService,
    private loadingController: LoadingController,
    private router: Router,
    public menuController: MenuController
  ) { 
    // deshabilitando el menu...
    this.menuController.enable(false);
    // seteo de formulario...
    this.formGroupCredenciales = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  async ngOnInit() {
    try {
      // al iniciar el sistema... verificamos que el superusuario exista
      // si no existe, lo crea automáticamente
      await this.seguridadService.inicioSistema();    
    } catch (error) {
      throw error;
    }    
  }

  get usuario() {
    return this.formGroupCredenciales.get('usuario');
  }

  get clave() {
    return this.formGroupCredenciales.get('clave');
  }

  private async errorLogin(message: string) {
      // no està logeado...
      OBJECTO_MENSAJES_ALERTA.header = SEGURIDAD_CONTROLLER.MENSAJES.LOGIN.HEADER;
      OBJECTO_MENSAJES_ALERTA.cssClass = SEGURIDAD_CONTROLLER.MENSAJES.LOGIN.INCORRECTO.CSSCLASS;
      OBJECTO_MENSAJES_ALERTA.subHeader = SEGURIDAD_CONTROLLER.MENSAJES.LOGIN.INCORRECTO.SUBHEADER;
      OBJECTO_MENSAJES_ALERTA.message = message
      OBJECTO_MENSAJES_ALERTA.buttons = SEGURIDAD_CONTROLLER.MENSAJES.LOGIN.BUTTONS;
      // presentamos la alerta...
      await this.utilitariosService.retornaMensajeAlerta(OBJECTO_MENSAJES_ALERTA);
  }

  async inicioSesion() {
    // loading control...
    const loading = await this.loadingController.create();
    await loading.present();
    // try catch...
    try {
      const result: any = await this.seguridadService.login(this.formGroupCredenciales.value);
      // verifica si el usuario existe...
      if(result) {
        // reenviamos a la pagina principal...
        this.router.navigate(['/principal']);
      }
      // cerramos el loadingcontrol...
      await loading.dismiss();
    } catch (error) {
      // cerramos el loadingcontrol...
      await loading.dismiss();
      await this.errorLogin(error.message);      
    }
  }

  public async loginRedSocial(redsocial: string) {
    const loading = await this.loadingController.create();
    await loading.present();
    try {
      // login por red social...
      let result = await this.seguridadService.login(null, true, redsocial);
      // verifica si el usuario existe...
      if(result) {
        // reenviamos a la pagina principal...
        this.router.navigate(['/principal']);
      }
      // cerramos el loadingcontrol...
      await loading.dismiss();      
    } 
    catch (error) {
      // cerramos el loadingcontrol...
      await loading.dismiss();
      await this.errorLogin(error.message);
    }
  }

}
