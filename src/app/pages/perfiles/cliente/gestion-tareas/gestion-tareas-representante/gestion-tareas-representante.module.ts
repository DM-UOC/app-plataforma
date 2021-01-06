import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionTareasRepresentantePageRoutingModule } from './gestion-tareas-representante-routing.module';

import { GestionTareasRepresentantePage } from './gestion-tareas-representante.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    GestionTareasRepresentantePageRoutingModule
  ],
  declarations: [GestionTareasRepresentantePage]
})
export class GestionTareasRepresentantePageModule {}
