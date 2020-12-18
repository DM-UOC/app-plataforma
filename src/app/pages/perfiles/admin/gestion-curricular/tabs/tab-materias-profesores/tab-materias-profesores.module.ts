import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMateriasProfesoresPageRoutingModule } from './tab-materias-profesores-routing.module';

import { TabMateriasProfesoresPage } from './tab-materias-profesores.page';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TooltipModule,
    TabMateriasProfesoresPageRoutingModule
  ],
  declarations: [TabMateriasProfesoresPage]
})
export class TabMateriasProfesoresPageModule {}
