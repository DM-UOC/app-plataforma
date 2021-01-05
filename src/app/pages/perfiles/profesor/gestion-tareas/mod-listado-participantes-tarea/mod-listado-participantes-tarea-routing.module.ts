import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModListadoParticipantesTareaPage } from './mod-listado-participantes-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: ModListadoParticipantesTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModListadoParticipantesTareaPageRoutingModule {}
