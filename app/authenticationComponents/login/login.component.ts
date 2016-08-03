import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES }                  from '@angular/router';

import {
    AuthenticationService
}           from '../../shared';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

    private errorMessage: string

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
    }

    login(event, username: string, password: string) {
        event.preventDefault();
        this.authenticationService.
            login(username, password)
            .subscribe(
            () => {
                console.log('Login successfully');
                this.router.navigate(['/items-list']);
            },
            error => {
                this.errorMessage = <any>error
                console.log(error)
            });
    }

    ngOnDestroy() {
    }

}
