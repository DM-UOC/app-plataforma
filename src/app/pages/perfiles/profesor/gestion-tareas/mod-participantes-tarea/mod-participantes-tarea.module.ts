import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModParticipantesTareaPageRoutingModule } from './mod-participantes-tarea-routing.module';

import { ModParticipantesTareaPage } from './mod-participantes-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModParticipantesTareaPageRoutingModule
  ],
  declarations: [ModParticipantesTareaPage]
})
export class ModParticipantesTareaPageModule {}
