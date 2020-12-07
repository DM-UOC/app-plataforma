import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModLectivosPage } from './mod-lectivos.page';

const routes: Routes = [
  {
    path: '',
    component: ModLectivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModLectivosPageRoutingModule {}
