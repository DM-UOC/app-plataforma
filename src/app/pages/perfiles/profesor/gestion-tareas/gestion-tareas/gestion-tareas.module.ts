import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionTareasPageRoutingModule } from './gestion-tareas-routing.module';

import { GestionTareasPage } from './gestion-tareas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    GestionTareasPageRoutingModule
  ],
  declarations: [GestionTareasPage]
})
export class GestionTareasPageModule {}
