import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModProfesorMateriasPageRoutingModule } from './mod-profesor-materias-routing.module';

import { ModProfesorMateriasPage } from './mod-profesor-materias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModProfesorMateriasPageRoutingModule
  ],
  declarations: [ModProfesorMateriasPage]
})
export class ModProfesorMateriasPageModule {}
