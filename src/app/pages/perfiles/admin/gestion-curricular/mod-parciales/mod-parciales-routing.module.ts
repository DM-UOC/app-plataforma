import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModParcialesPage } from './mod-parciales.page';

const routes: Routes = [
  {
    path: '',
    component: ModParcialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModParcialesPageRoutingModule {}
