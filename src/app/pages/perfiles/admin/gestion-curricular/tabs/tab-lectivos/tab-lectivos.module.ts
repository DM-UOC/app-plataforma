import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabLectivosPageRoutingModule } from './tab-lectivos-routing.module';

import { TabLectivosPage } from './tab-lectivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabLectivosPageRoutingModule
  ],
  declarations: [TabLectivosPage]
})
export class TabLectivosPageModule {}
