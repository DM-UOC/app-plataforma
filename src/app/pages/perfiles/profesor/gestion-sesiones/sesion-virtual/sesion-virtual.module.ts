import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionVirtualPageRoutingModule } from './sesion-virtual-routing.module';

import { SesionVirtualPage } from './sesion-virtual.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TooltipModule,
    SesionVirtualPageRoutingModule
  ],
  declarations: [SesionVirtualPage]
})
export class SesionVirtualPageModule {}
