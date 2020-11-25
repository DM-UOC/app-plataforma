import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CliHijosPage } from './cli-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: CliHijosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CliHijosPageRoutingModule {}
