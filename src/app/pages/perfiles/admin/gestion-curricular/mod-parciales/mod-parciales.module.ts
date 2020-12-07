import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModParcialesPageRoutingModule } from './mod-parciales-routing.module';

import { ModParcialesPage } from './mod-parciales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModParcialesPageRoutingModule
  ],
  declarations: [ModParcialesPage]
})
export class ModParcialesPageModule {}
