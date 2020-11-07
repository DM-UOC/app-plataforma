import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../services/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticacionGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private seguridadService: SeguridadService
  ) { 
  }
  
  async canActivate(): Promise<boolean> {
    // verificando si está logeado...
    let resultado: boolean = await this.seguridadService.verificaAltaUsuario();
    // verificamos el estado...
    if(!resultado) {
      // no esta logueado...
      this.router.navigate(['/login']);
    }
    // return...
    return resultado;
  }
  
}
