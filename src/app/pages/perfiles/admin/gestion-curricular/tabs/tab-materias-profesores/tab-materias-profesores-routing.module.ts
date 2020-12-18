import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMateriasProfesoresPage } from './tab-materias-profesores.page';

const routes: Routes = [
  {
    path: '',
    component: TabMateriasProfesoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMateriasProfesoresPageRoutingModule {}
