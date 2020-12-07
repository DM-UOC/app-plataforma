import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParcialesDetallePage } from './parciales-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ParcialesDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParcialesDetallePageRoutingModule {}
