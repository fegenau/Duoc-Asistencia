import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  private isAuthenticated = false;
  constructor(private router: Router){}

  setAutenticationStatus( status:boolean ){
    this.isAuthenticated = status;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.isAuthenticated){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
    }
  
}
