import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradoresPageRoutingModule } from './administradores-routing.module';

import { AdministradoresPage } from './administradores.page';
import { UsuariosPage } from '../../usuarios/usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdministradoresPageRoutingModule
  ],
  declarations: [AdministradoresPage, UsuariosPage],
  exports: []
})
export class AdministradoresPageModule {}
