import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCliTareasPageRoutingModule } from './tab-cli-tareas-routing.module';

import { TabCliTareasPage } from './tab-cli-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCliTareasPageRoutingModule
  ],
  declarations: [TabCliTareasPage]
})
export class TabCliTareasPageModule {}
