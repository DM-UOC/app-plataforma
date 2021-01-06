import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCliTareasPage } from './tab-cli-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: TabCliTareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCliTareasPageRoutingModule {}
