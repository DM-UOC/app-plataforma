import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmMateriasPageRoutingModule } from './adm-materias-routing.module';

import { AdmMateriasPage } from './adm-materias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmMateriasPageRoutingModule
  ],
  declarations: [AdmMateriasPage]
})
export class AdmMateriasPageModule {}
