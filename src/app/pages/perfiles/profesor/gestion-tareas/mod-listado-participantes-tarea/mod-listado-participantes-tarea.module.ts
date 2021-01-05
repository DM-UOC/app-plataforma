import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModListadoParticipantesTareaPageRoutingModule } from './mod-listado-participantes-tarea-routing.module';

import { ModListadoParticipantesTareaPage } from './mod-listado-participantes-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModListadoParticipantesTareaPageRoutingModule
  ],
  declarations: [ModListadoParticipantesTareaPage]
})
export class ModListadoParticipantesTareaPageModule {}
