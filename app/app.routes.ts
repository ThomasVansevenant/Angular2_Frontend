import { provideRouter, RouterConfig }  from '@angular/router';

import {
    ItemsListComponent }                from './itemComponents';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/items-list',
        pathMatch: 'full'
    },
    {
        path: 'items-list',
        component: ItemsListComponent
    }

];

export const appRouterProviders = [
    provideRouter(routes)
];
