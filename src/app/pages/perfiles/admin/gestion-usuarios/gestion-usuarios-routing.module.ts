import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionUsuariosPage } from './gestion-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: GestionUsuariosPage,
    children: [
      {
        path: 'administradores',
        loadChildren: () => import('./tabs/administradores/administradores.module').then( m => m.AdministradoresPageModule)
      },
      {
        path: 'profesores',
        loadChildren: () => import('./tabs/profesores/profesores.module').then( m => m.ProfesoresPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionUsuariosPageRoutingModule {}
