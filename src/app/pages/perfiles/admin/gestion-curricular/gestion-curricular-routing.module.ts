import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCurricularPage } from './gestion-curricular.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCurricularPage,
    children: [
      {
        path: 'adm-materias',
        loadChildren: () => import('./tabs/adm-materias/adm-materias.module').then( m => m.AdmMateriasPageModule)
      },
      {
        path: 'adm-materias-profesores',
        loadChildren: () => import('./tabs/adm-materias-profesores/adm-materias-profesores.module').then( m => m.AdmMateriasProfesoresPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCurricularPageRoutingModule {}
