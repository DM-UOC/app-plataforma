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
        path: 'tab-materias-profesores',
        loadChildren: () => import('./tabs/tab-materias-profesores/tab-materias-profesores.module').then( m => m.TabMateriasProfesoresPageModule)
      }     
    ]
  },
  {
    path: 'mod-profesor-materias',
    loadChildren: () => import('./mod-profesor-materias/mod-profesor-materias.module').then( m => m.ModProfesorMateriasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCurricularPageRoutingModule {}
