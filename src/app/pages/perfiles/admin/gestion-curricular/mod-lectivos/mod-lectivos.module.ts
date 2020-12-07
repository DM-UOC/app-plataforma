import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModLectivosPageRoutingModule } from './mod-lectivos-routing.module';

import { ModLectivosPage } from './mod-lectivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModLectivosPageRoutingModule
  ],
  declarations: [ModLectivosPage]
})
export class ModLectivosPageModule {}
