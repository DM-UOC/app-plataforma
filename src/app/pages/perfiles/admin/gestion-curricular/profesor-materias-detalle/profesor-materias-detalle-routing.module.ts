import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorMateriasDetallePage } from './profesor-materias-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorMateriasDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorMateriasDetallePageRoutingModule {}
