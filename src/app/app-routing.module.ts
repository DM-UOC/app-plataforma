import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticacionGuard } from './guard/authenticacion.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/comun/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/comun/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/comun/principal/principal.module').then( m => m.PrincipalPageModule),
    canActivate: [AuthenticacionGuard]
  },
  {
    path: 'gestion-usuarios',
    loadChildren: () => import('./pages/perfiles/admin/gestion-usuarios/gestion-usuarios.module').then( m => m.GestionUsuariosPageModule),
    canActivate: [AuthenticacionGuard]
  },
  {
    path: 'gestion-curricular',
    loadChildren: () => import('./pages/perfiles/admin/gestion-curricular/gestion-curricular.module').then( m => m.GestionCurricularPageModule),
    canActivate: [AuthenticacionGuard]
  },
  {
    path: 'gestion-hijos',
    loadChildren: () => import('./pages/perfiles/cliente/gestion-hijos/gestion-hijos.module').then( m => m.GestionHijosPageModule),
    canActivate: [AuthenticacionGuard]
  },
  {
    path: 'parciales-detalle',
    loadChildren: () => import('./pages/perfiles/admin/gestion-curricular/parciales-detalle/parciales-detalle.module').then( m => m.ParcialesDetallePageModule),
    canActivate: [AuthenticacionGuard]
  },
  {
    path: 'profesor-materias-detalle',
    loadChildren: () => import('./pages/perfiles/admin/gestion-curricular/profesor-materias-detalle/profesor-materias-detalle.module').then( m => m.ProfesorMateriasDetallePageModule),
    canActivate: [AuthenticacionGuard]
  },
  {
    path: 'profesor-estudios-detalle',
    loadChildren: () => import('./pages/perfiles/admin/gestion-curricular/profesor-estudios-detalle/profesor-estudios-detalle.module').then( m => m.ProfesorEstudiosDetallePageModule),
    canActivate: [AuthenticacionGuard]
  },
  {
    path: 'sesion-virtual',
    loadChildren: () => import('./pages/perfiles/profesor/gestion-sesiones/sesion-virtual/sesion-virtual.module').then( m => m.SesionVirtualPageModule),
    canActivate: [AuthenticacionGuard]
  },
  {
    path: 'gestion-sesiones-virtuales',
    loadChildren: () => import('./pages/perfiles/profesor/gestion-sesiones/gestion-sesiones-virtuales/gestion-sesiones-virtuales.module').then( m => m.GestionSesionesVirtualesPageModule),
    canActivate: [AuthenticacionGuard]
  },
  {
    path: 'mod-sesiones',
    loadChildren: () => import('./pages/perfiles/profesor/gestion-sesiones/mod-sesiones/mod-sesiones.module').then( m => m.ModSesionesPageModule),
    canActivate: [AuthenticacionGuard]
  },
  {
    path: 'mod-sesion-participantes',
    loadChildren: () => import('./pages/perfiles/profesor/gestion-sesiones/mod-sesion-participantes/mod-sesion-participantes.module').then( m => m.ModSesionParticipantesPageModule)
  },
  {
    path: 'mod-listado-participantes-sesion',
    loadChildren: () => import('./pages/perfiles/profesor/gestion-sesiones/mod-listado-participantes-sesion/mod-listado-participantes-sesion.module').then( m => m.ModListadoParticipantesSesionPageModule)
  },
  {
    path: 'sala-virtual',
    loadChildren: () => import('./pages/perfiles/profesor/gestion-sesiones/sala-virtual/sala-virtual.module').then( m => m.SalaVirtualPageModule),
    canActivate: [AuthenticacionGuard]
  },
  {
    path: 'gestion-tareas',
    loadChildren: () => import('./pages/perfiles/profesor/gestion-tareas/gestion-tareas/gestion-tareas.module').then( m => m.GestionTareasPageModule)
  },
  {
    path: 'mod-gestion-tareas',
    loadChildren: () => import('./pages/perfiles/profesor/gestion-tareas/mod-gestion-tareas/mod-gestion-tareas.module').then( m => m.ModGestionTareasPageModule),
    canActivate: [AuthenticacionGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
