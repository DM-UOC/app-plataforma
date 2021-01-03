import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModGestionTareasPage } from './mod-gestion-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: ModGestionTareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModGestionTareasPageRoutingModule {}
