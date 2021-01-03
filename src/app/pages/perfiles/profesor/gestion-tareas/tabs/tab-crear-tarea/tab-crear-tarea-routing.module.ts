import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCrearTareaPage } from './tab-crear-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: TabCrearTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCrearTareaPageRoutingModule {}
