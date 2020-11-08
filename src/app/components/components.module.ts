import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CabeceraComponent,
    MenuComponent
  ],
  exports: [
    CabeceraComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
