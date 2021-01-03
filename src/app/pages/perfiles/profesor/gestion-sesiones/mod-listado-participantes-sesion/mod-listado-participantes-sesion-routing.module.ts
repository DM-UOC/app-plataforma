import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModListadoParticipantesSesionPage } from './mod-listado-participantes-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: ModListadoParticipantesSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModListadoParticipantesSesionPageRoutingModule {}
