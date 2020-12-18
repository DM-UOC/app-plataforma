import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModProfesorMateriasPage } from './mod-profesor-materias.page';

const routes: Routes = [
  {
    path: '',
    component: ModProfesorMateriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModProfesorMateriasPageRoutingModule {}
