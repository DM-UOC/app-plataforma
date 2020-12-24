import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionSesionesVirtualesPage } from './gestion-sesiones-virtuales.page';

const routes: Routes = [
  {
    path: '',
    component: GestionSesionesVirtualesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionSesionesVirtualesPageRoutingModule {}
