import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCrearTareaPageRoutingModule } from './tab-crear-tarea-routing.module';

import { TabCrearTareaPage } from './tab-crear-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TabCrearTareaPageRoutingModule
  ],
  declarations: [TabCrearTareaPage]
})
export class TabCrearTareaPageModule {}
