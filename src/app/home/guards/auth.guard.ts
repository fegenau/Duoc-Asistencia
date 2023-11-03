import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginPage } from './login/login.page';

@Injectable({
providedIn: 'root'
})
export class AuthGuard implements CanLoad {

constructor(private authService: LoginPage, private router: Router) {}

canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn()) {
    return true;
    } else {
      this.router.navigate(['/login.page']);
    return false;
    }
}
}
