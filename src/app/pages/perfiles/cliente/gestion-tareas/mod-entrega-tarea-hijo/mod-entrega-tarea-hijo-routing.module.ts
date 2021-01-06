import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModEntregaTareaHijoPage } from './mod-entrega-tarea-hijo.page';

const routes: Routes = [
  {
    path: '',
    component: ModEntregaTareaHijoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModEntregaTareaHijoPageRoutingModule {}
