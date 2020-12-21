import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionVirtualPage } from './sesion-virtual.page';

const routes: Routes = [
  {
    path: '',
    component: SesionVirtualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionVirtualPageRoutingModule {}
