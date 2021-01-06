import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCliTareasPageRoutingModule } from './tab-cli-tareas-routing.module';

import { TabCliTareasPage } from './tab-cli-tareas.page';
import { TooltipModule } from 'ng2-tooltip-directive';
import { IonicRatingComponentModule } from 'ionic-rating-component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TooltipModule,
    IonicRatingComponentModule,
    TabCliTareasPageRoutingModule
  ],
  declarations: [TabCliTareasPage]
})
export class TabCliTareasPageModule {}
