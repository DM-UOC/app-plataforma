import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModParcialesDetallePageRoutingModule } from './mod-parciales-detalle-routing.module';

import { ModParcialesDetallePage } from './mod-parciales-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModParcialesDetallePageRoutingModule
  ],
  declarations: [ModParcialesDetallePage]
})
export class ModParcialesDetallePageModule {}
