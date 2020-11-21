import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesoresPageRoutingModule } from './profesores-routing.module';

import { ProfesoresPage } from './profesores.page';
import { UsuariosPage } from '../../../usuarios/usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesoresPageRoutingModule
  ],
  declarations: [ProfesoresPage, UsuariosPage]
})
export class ProfesoresPageModule {}
