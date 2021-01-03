import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticacionGuard } from 'src/app/guard/authenticacion.guard';

import { GestionTareasPage } from './gestion-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: GestionTareasPage,
    children: [
      {
        path: 'tab-tareas',
        loadChildren: () => import('../tabs/tab-crear-tarea/tab-crear-tarea.module').then( m => m.TabCrearTareaPageModule),
        canActivate: [AuthenticacionGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionTareasPageRoutingModule {}
