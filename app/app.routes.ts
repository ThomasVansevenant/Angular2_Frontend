import { provideRouter, RouterConfig }  from '@angular/router';

import {
    ItemsListComponent,
    ItemDetailComponent,
    ItemAddComponent
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
    },
    {
        path: 'item-add',
        component: ItemAddComponent
    }

];

export const appRouterProviders = [
    provideRouter(routes)
];
