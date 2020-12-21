import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionHijosPage } from './gestion-hijos.page';

const routes: Routes = [
  {
    path: '',
    component: GestionHijosPage
  },
  {
    path: 'mod-hijos',
    loadChildren: () => import('../mod-hijos/mod-hijos.module').then( m => m.ModHijosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionHijosPageRoutingModule {}
