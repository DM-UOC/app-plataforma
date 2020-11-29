import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModMateriasPageRoutingModule } from './mod-materias-routing.module';

import { ModMateriasPage } from './mod-materias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModMateriasPageRoutingModule
  ],
  declarations: [ModMateriasPage]
})
export class ModMateriasPageModule {}
