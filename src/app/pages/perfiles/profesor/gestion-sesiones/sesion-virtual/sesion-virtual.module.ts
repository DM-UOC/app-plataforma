import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionVirtualPageRoutingModule } from './sesion-virtual-routing.module';

import { SesionVirtualPage } from './sesion-virtual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionVirtualPageRoutingModule
  ],
  declarations: [SesionVirtualPage]
})
export class SesionVirtualPageModule {}
