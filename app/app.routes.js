"use strict";
/**
 * Handles the routing of the application
 */
var router_1 = require('@angular/router');
var shared_1 = require('./shared');
var itemComponents_1 = require('./itemComponents');
var authenticationComponents_1 = require('./authenticationComponents');
var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'items-list',
        component: itemComponents_1.ItemsListComponent,
        canActivate: [shared_1.AuthGuard]
    },
    {
        path: 'item-detail/:id',
        component: itemComponents_1.ItemDetailComponent,
        canActivate: [shared_1.AuthGuard]
    },
    {
        path: 'item-add',
        component: itemComponents_1.ItemAddComponent,
        canActivate: [shared_1.AuthGuard]
    },
    {
        path: 'item-edit/:id',
        component: itemComponents_1.ItemEditComponent,
        canActivate: [shared_1.AuthGuard]
    },
    {
        path: 'login',
        component: authenticationComponents_1.LoginComponent
    },
    {
        path: 'signup',
        component: authenticationComponents_1.SignupComponent
    },
    {
        path: '**',
        component: authenticationComponents_1.LoginComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map