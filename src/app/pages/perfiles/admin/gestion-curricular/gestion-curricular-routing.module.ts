import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCurricularPage } from './gestion-curricular.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCurricularPage,
    children: [
      {
        path: 'tab-lectivos',
        loadChildren: () => import('./tabs/tab-lectivos/tab-lectivos.module').then( m => m.TabLectivosPageModule)
      },
      {
        path: 'tab-materias',
        loadChildren: () => import('./tabs/tab-materias/tab-materias.module').then( m => m.TabMateriasPageModule)
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
