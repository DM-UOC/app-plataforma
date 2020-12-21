import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModHijosPage } from './mod-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: ModHijosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModHijosPageRoutingModule {}
