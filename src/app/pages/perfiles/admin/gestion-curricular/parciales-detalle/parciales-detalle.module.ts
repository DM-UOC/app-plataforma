import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParcialesDetallePageRoutingModule } from './parciales-detalle-routing.module';

import { ParcialesDetallePage } from './parciales-detalle.page';
import { ModParcialesDetallePage } from '../mod-parciales-detalle/mod-parciales-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ParcialesDetallePageRoutingModule
  ],
  declarations: [ParcialesDetallePage, ModParcialesDetallePage]
})
export class ParcialesDetallePageModule {}
