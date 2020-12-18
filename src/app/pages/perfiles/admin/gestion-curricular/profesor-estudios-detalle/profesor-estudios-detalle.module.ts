import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorEstudiosDetallePageRoutingModule } from './profesor-estudios-detalle-routing.module';

import { ProfesorEstudiosDetallePage } from './profesor-estudios-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorEstudiosDetallePageRoutingModule
  ],
  declarations: [ProfesorEstudiosDetallePage]
})
export class ProfesorEstudiosDetallePageModule {}
