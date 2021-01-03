import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModSesionesPage } from './mod-sesiones.page';

const routes: Routes = [
  {
    path: '',
    component: ModSesionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModSesionesPageRoutingModule {}
