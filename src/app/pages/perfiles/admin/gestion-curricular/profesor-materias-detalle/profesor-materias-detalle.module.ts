import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorMateriasDetallePageRoutingModule } from './profesor-materias-detalle-routing.module';

import { ProfesorMateriasDetallePage } from './profesor-materias-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorMateriasDetallePageRoutingModule
  ],
  declarations: [ProfesorMateriasDetallePage]
})
export class ProfesorMateriasDetallePageModule {}
