import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCliNotificacionesPageRoutingModule } from './tab-cli-notificaciones-routing.module';

import { TabCliNotificacionesPage } from './tab-cli-notificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCliNotificacionesPageRoutingModule
  ],
  declarations: [TabCliNotificacionesPage]
})
export class TabCliNotificacionesPageModule {}
