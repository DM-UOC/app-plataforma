import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCliNotificacionesPage } from './tab-cli-notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: TabCliNotificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCliNotificacionesPageRoutingModule {}
