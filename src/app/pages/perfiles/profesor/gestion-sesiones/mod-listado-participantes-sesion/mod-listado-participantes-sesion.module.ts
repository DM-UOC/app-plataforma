import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModListadoParticipantesSesionPageRoutingModule } from './mod-listado-participantes-sesion-routing.module';

import { ModListadoParticipantesSesionPage } from './mod-listado-participantes-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModListadoParticipantesSesionPageRoutingModule
  ],
  declarations: [ModListadoParticipantesSesionPage]
})
export class ModListadoParticipantesSesionPageModule {}
