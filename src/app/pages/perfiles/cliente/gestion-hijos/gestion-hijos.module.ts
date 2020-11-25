import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionHijosPageRoutingModule } from './gestion-hijos-routing.module';

import { GestionHijosPage } from './gestion-hijos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    GestionHijosPageRoutingModule
  ],
  declarations: [GestionHijosPage]
})
export class GestionHijosPageModule {}
