import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaVirtualPageRoutingModule } from './sala-virtual-routing.module';

import { SalaVirtualPage } from './sala-virtual.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TooltipModule,
    SalaVirtualPageRoutingModule
  ],
  declarations: [SalaVirtualPage]
})
export class SalaVirtualPageModule {}
