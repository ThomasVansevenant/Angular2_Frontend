import { provideRouter, RouterConfig }  from '@angular/router';

import {
    ItemsListComponent,
    ItemDetailComponent,
    ItemAddComponent,
    ItemEditComponent
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
    },
    {
        path: 'item-edit/:id',
        component: ItemEditComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
