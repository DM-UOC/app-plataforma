import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModParcialesDetallePage } from './mod-parciales-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ModParcialesDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModParcialesDetallePageRoutingModule {}
