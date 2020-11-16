import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/usuario.interface';
import { PerfilesService } from 'src/app/services/perfiles/perfiles.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  public formUsuario: FormGroup;
  
  public usuarios: IUsuario = [] as IUsuario;
  public nuevoUsuario: IUsuario;

  constructor(
    private formBuilder: FormBuilder,
    private perfilesService: PerfilesService
  ) {     
  }

  async ngOnInit() {
    // seteo de formulario...
    this.formUsuario = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]]
    });    
    // retornando usuarios...
    await this.retornaUsuarios();
  }

  get usuario() {
    return this.formUsuario.get('usuario');
  }

  get apellido() {
    return this.formUsuario.get('apellido');
  }

  get correo() {
    return this.formUsuario.get('correo');
  }

  public async retornaUsuarios() {
  }

  public async crear($event) {
    console.log('tratando de guarda...');
    $event.preventDefault();
  }
  
}
