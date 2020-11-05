import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CabeceraComponent } from './cabecera/cabecera.component';



@NgModule({
  declarations: [
    MenuComponent,
    CabeceraComponent
  ],
  exports: [
    MenuComponent,
    CabeceraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
