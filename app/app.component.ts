import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {
    ItemService,
    ConfigService,
    NotificationService,
    AuthenticationService,
    AuthGuard}      from './shared';

import {
    ItemsListComponent,
    ItemDetailComponent,
    ItemAddComponent,
    ItemEditComponent

}                             from './itemComponents';
import {
    LoginComponent,
    SignupComponent
}                             from './authenticationComponents';

import './rxjs-operators';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.components.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ItemService,
        ConfigService,
        NotificationService,
        AuthGuard,
        AuthenticationService
    ],
    precompile: [
        ItemsListComponent,
        ItemDetailComponent,
        ItemAddComponent,
        ItemEditComponent,
        LoginComponent,
        SignupComponent
    ]
})
export class AppComponent { }
