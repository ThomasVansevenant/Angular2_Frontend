import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Router }                  from '@angular/router';

import {
    AuthenticationService
}           from '../../shared';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: './signup.component.html',
    directives: [],
    providers: [],
    styleUrls: ['signup.component.css'],
    pipes: []
})

export class SignupComponent implements OnInit, OnDestroy {

    private errorMessage: string

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
    }

    signup(event, username: string, password: string) {
        event.preventDefault();
        this.authenticationService
            .signup(username, password)
            .subscribe(
            () => {
                console.log('Signup successfully');
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
