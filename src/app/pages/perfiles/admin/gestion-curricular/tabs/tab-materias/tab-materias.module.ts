import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMateriasPageRoutingModule } from './tab-materias-routing.module';

import { TabMateriasPage } from './tab-materias.page';
import { ModMateriasPage } from '../../mod-materias/mod-materias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TabMateriasPageRoutingModule
  ],
  declarations: [TabMateriasPage, ModMateriasPage]
})
export class TabMateriasPageModule {}
