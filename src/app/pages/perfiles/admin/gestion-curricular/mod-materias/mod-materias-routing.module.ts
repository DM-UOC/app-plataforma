import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModMateriasPage } from './mod-materias.page';

const routes: Routes = [
  {
    path: '',
    component: ModMateriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModMateriasPageRoutingModule {}
