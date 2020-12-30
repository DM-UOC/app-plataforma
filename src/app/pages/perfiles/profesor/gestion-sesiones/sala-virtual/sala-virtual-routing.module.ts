import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaVirtualPage } from './sala-virtual.page';

const routes: Routes = [
  {
    path: '',
    component: SalaVirtualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaVirtualPageRoutingModule {}
