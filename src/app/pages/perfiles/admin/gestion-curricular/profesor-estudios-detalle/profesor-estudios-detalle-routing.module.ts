import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorEstudiosDetallePage } from './profesor-estudios-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorEstudiosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorEstudiosDetallePageRoutingModule {}
