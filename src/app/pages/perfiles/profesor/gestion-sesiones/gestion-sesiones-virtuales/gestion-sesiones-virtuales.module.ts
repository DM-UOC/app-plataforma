import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionSesionesVirtualesPageRoutingModule } from './gestion-sesiones-virtuales-routing.module';

import { GestionSesionesVirtualesPage } from './gestion-sesiones-virtuales.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModSesionesPage } from '../../mod-sesiones/mod-sesiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    GestionSesionesVirtualesPageRoutingModule
  ],
  declarations: [GestionSesionesVirtualesPage, ModSesionesPage]
})
export class GestionSesionesVirtualesPageModule {}
