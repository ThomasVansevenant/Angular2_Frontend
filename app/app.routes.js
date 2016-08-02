"use strict";
var router_1 = require('@angular/router');
var itemComponents_1 = require('./itemComponents');
var routes = [
    {
        path: '',
        redirectTo: '/items-list',
        pathMatch: 'full'
    },
    {
        path: 'items-list',
        component: itemComponents_1.ItemsListComponent
    },
    {
        path: 'item-detail/:id',
        component: itemComponents_1.ItemDetailComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map