/**
 * Read if a cookie 'CakeCookie[auth_token]' is present
 * if it return true activation of link is possible
 * eg. canActivate: [AuthGuard] in app.routes.ts
 */

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate() {
        if (document.cookie.indexOf('CakeCookie[auth_token]') > -1) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

}
