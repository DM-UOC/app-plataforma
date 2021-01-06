import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCliSesionesPage } from './tab-cli-sesiones.page';

const routes: Routes = [
  {
    path: '',
    component: TabCliSesionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCliSesionesPageRoutingModule {}
