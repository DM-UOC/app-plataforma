import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModHijosPageRoutingModule } from './mod-hijos-routing.module';

import { ModHijosPage } from './mod-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModHijosPageRoutingModule
  ],
  declarations: [ModHijosPage]
})
export class ModHijosPageModule {}
