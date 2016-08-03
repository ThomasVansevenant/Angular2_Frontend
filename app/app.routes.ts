import { provideRouter, RouterConfig }  from '@angular/router';
import { AuthGuard } from './shared';

import {
    ItemsListComponent,
    ItemDetailComponent,
    ItemAddComponent,
    ItemEditComponent,
}                from './itemComponents';

import {
    LoginComponent,
    SignupComponent } from './authenticationComponents';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'items-list',
        component: ItemsListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'item-detail/:id',
        component: ItemDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'item-add',
        component: ItemAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'item-edit/:id',
        component: ItemEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '**',
        component: LoginComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
