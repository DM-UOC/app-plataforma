import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModGestionTareasPageRoutingModule } from './mod-gestion-tareas-routing.module';

import { ModGestionTareasPage } from './mod-gestion-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModGestionTareasPageRoutingModule
  ],
  declarations: [ModGestionTareasPage]
})
export class ModGestionTareasPageModule {}
