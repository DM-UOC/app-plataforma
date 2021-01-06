import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCliSesionesPageRoutingModule } from './tab-cli-sesiones-routing.module';

import { TabCliSesionesPage } from './tab-cli-sesiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCliSesionesPageRoutingModule
  ],
  declarations: [TabCliSesionesPage]
})
export class TabCliSesionesPageModule {}
