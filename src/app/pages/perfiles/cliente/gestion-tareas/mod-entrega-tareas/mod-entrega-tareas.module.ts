import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModEntregaTareasPageRoutingModule } from './mod-entrega-tareas-routing.module';

import { ModEntregaTareasPage } from './mod-entrega-tareas.page';
import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileUploadModule,
    ModEntregaTareasPageRoutingModule
  ],
  declarations: [ModEntregaTareasPage]
})
export class ModEntregaTareasPageModule {}
