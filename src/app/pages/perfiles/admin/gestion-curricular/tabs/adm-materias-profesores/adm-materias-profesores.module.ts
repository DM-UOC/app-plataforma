import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmMateriasProfesoresPageRoutingModule } from './adm-materias-profesores-routing.module';

import { AdmMateriasProfesoresPage } from './adm-materias-profesores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmMateriasProfesoresPageRoutingModule
  ],
  declarations: [AdmMateriasProfesoresPage]
})
export class AdmMateriasProfesoresPageModule {}
