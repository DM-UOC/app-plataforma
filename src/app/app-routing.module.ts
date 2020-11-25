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
    path: 'cli-hijos',
    loadChildren: () => import('./pages/perfiles/cliente/cli-hijos/cli-hijos.module').then( m => m.CliHijosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
