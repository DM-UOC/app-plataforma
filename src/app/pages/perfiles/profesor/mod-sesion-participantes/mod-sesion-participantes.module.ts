import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModSesionParticipantesPageRoutingModule } from './mod-sesion-participantes-routing.module';

import { ModSesionParticipantesPage } from './mod-sesion-participantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModSesionParticipantesPageRoutingModule
  ],
  declarations: [ModSesionParticipantesPage]
})
export class ModSesionParticipantesPageModule {}
