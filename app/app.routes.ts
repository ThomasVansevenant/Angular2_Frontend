import { provideRouter, RouterConfig }  from '@angular/router';

import {
    ItemsListComponent,
    ItemDetailComponent
}                from './itemComponents';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/items-list',
        pathMatch: 'full'
    },
    {
        path: 'items-list',
        component: ItemsListComponent
    },
    {
        path: 'item-detail/:id',
        component: ItemDetailComponent
    }

];

export const appRouterProviders = [
    provideRouter(routes)
];
