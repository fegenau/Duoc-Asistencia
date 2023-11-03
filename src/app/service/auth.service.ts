import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class AuthService {
private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

constructor() {}

setAuthenticationStatus(status: boolean) {
    this.isAuthenticatedSubject.next(status);
}
}
