import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCrearTareaPageRoutingModule } from './tab-crear-tarea-routing.module';

import { TabCrearTareaPage } from './tab-crear-tarea.page';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TooltipModule,
    TabCrearTareaPageRoutingModule
  ],
  declarations: [TabCrearTareaPage]
})
export class TabCrearTareaPageModule {}
