import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModParticipantesTareaPage } from './mod-participantes-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: ModParticipantesTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModParticipantesTareaPageRoutingModule {}
