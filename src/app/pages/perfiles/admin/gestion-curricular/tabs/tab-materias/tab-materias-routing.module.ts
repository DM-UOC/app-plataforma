import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMateriasPage } from './tab-materias.page';

const routes: Routes = [
  {
    path: '',
    component: TabMateriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMateriasPageRoutingModule {}
