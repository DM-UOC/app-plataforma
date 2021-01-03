import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabLectivosPageRoutingModule } from './tab-lectivos-routing.module';

import { TabLectivosPage } from './tab-lectivos.page';
import { ModLectivosPage } from '../../mod-lectivos/mod-lectivos.page';
import { ModParcialesPage } from '../../mod-parciales/mod-parciales.page';
import { ModParcialesDetallePage } from '../../mod-parciales-detalle/mod-parciales-detalle.page';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TooltipModule,
    TabLectivosPageRoutingModule
  ],
  declarations: [TabLectivosPage, ModLectivosPage, ModParcialesPage, ModParcialesDetallePage]
})
export class TabLectivosPageModule {}
