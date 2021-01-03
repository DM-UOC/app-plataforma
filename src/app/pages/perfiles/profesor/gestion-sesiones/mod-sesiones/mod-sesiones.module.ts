import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModSesionesPageRoutingModule } from './mod-sesiones-routing.module';

import { ModSesionesPage } from './mod-sesiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModSesionesPageRoutingModule
  ],
  declarations: [ModSesionesPage]
})
export class ModSesionesPageModule {}
