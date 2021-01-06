import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticacionGuard } from 'src/app/guard/authenticacion.guard';

import { GestionTareasRepresentantePage } from './gestion-tareas-representante.page';

const routes: Routes = [
  {
    path: '',
    component: GestionTareasRepresentantePage,
    children: [
      {
        path: 'tab-cli-sesiones',
        loadChildren: () => import('../tabs/tab-cli-sesiones/tab-cli-sesiones.module').then( m => m.TabCliSesionesPageModule),
        canActivate: [
          AuthenticacionGuard
        ]
      },
      {
        path: 'tab-cli-tareas',
        loadChildren: () => import('../tabs/tab-cli-tareas/tab-cli-tareas.module').then( m => m.TabCliTareasPageModule),
        canActivate: [
          AuthenticacionGuard
        ]        
      },
      {
        path: 'tab-cli-notificaciones',
        loadChildren: () => import('../tabs/tab-cli-notificaciones/tab-cli-notificaciones.module').then( m => m.TabCliNotificacionesPageModule),
        canActivate: [
          AuthenticacionGuard
        ]        
      },
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionTareasRepresentantePageRoutingModule {}
