import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';
import { ConsumoApiService } from 'src/app/service/consumo-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private consumoApi: ConsumoApiService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.consumoApi.getUserRoles().pipe(
      map((roles: string[]) => {
        // Verificar si el usuario tiene los roles requeridos para la ruta.
        const requiredRoles = route.data['roles'] as string[];
        const userRoles = roles;

        const isAuthorized = requiredRoles.every((role) => userRoles.includes(role));

        if (isAuthorized) {
          return true; // Usuario autorizado, permitir el acceso.
        } else {
          // Redirigir al usuario a la página de inicio de sesión o a otra página según tus necesidades.
          return this.router.createUrlTree(['/login']);
        }
      }),

    );
  }
}