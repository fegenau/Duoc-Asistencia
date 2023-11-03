import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthenticated = false;
  constructor(private router: Router) {}

  
  setAuthenticationStatus(status: boolean) {
    this.isAuthenticated = status;
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isAuthenticated) {
      return true; // Usuario autenticado, permitir el acceso.
    } else {
      // Redirigir al usuario a la página de inicio de sesión.
      this.router.navigate(['/login']);
      return false;
    }
  }
}
