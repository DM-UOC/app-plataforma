import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { SeguridadService } from 'src/app/services/seguridad.service';

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
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router    
  ) { }

  async ngOnInit() {
    try {
      // al iniciar el sistema... verificamos que el superusuario exista
      // si no existe, lo crea automáticamente
      await this.seguridadService.inicioSistema();
      // seteo de formulario...
      this.formGroupCredenciales = this.formBuilder.group({
        usuario: ['', [Validators.required, Validators.email]],
        clave: ['', [Validators.required, Validators.minLength(6)]]
      });      
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

  async login() {
    // loading control...
    const loading = await this.loadingController.create();
    await loading.present();
    // try catch...
    try {
      const result: any = await this.seguridadService.login(this.formGroupCredenciales.value);
      // verifica si el usuario existe...
      if(result.existeUsuario === true) {
        // reenviamos a la pagina principal...
      }
      else {
        // no est{a logeado...

      }
      // cerramos el loadingcontrol...
      await loading.dismiss();
    } catch (error) {
      // cerramos el loadingcontrol...
      await loading.dismiss();      
      throw error;
    }
  }
  
}
