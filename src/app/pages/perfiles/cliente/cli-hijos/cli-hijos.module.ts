import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CliHijosPageRoutingModule } from './cli-hijos-routing.module';

import { CliHijosPage } from './cli-hijos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CliHijosPageRoutingModule
  ],
  declarations: [CliHijosPage]
})
export class CliHijosPageModule {}
