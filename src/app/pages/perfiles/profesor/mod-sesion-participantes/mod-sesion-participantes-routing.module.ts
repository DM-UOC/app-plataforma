import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModSesionParticipantesPage } from './mod-sesion-participantes.page';

const routes: Routes = [
  {
    path: '',
    component: ModSesionParticipantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModSesionParticipantesPageRoutingModule {}
