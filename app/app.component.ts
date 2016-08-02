import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ItemService } from './shared';

import './rxjs-operators';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.components.html',
    providers: [ItemService]
})
export class AppComponent { }
