import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {
    ItemService,
    ConfigService,
    NotificationService}         from './shared';

import {
    ItemsListComponent,
    ItemDetailComponent
}  from './itemComponents';

import './rxjs-operators';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.components.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ItemService,
        ConfigService,
        NotificationService
      ],
    precompile: [
        ItemsListComponent,
        ItemDetailComponent
      ]
})
export class AppComponent { }
