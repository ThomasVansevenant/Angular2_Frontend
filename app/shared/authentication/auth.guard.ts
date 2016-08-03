import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate() {
        //tokenNotExpired
        if (document.cookie.indexOf('CakeCookie[auth_token]') > -1) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

}
