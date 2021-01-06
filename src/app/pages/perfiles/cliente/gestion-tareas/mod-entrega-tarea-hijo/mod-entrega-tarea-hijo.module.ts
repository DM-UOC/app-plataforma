import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModEntregaTareaHijoPageRoutingModule } from './mod-entrega-tarea-hijo-routing.module';

import { ModEntregaTareaHijoPage } from './mod-entrega-tarea-hijo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModEntregaTareaHijoPageRoutingModule
  ],
  declarations: [ModEntregaTareaHijoPage]
})
export class ModEntregaTareaHijoPageModule {}
