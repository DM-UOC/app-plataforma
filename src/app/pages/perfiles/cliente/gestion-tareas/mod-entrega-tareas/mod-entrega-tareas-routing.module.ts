import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModEntregaTareasPage } from './mod-entrega-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: ModEntregaTareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModEntregaTareasPageRoutingModule {}
