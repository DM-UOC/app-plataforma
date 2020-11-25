import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmMateriasProfesoresPage } from './adm-materias-profesores.page';

const routes: Routes = [
  {
    path: '',
    component: AdmMateriasProfesoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmMateriasProfesoresPageRoutingModule {}
