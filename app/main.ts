import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AuthGuard } from './shared';
import {enableProdMode} from '@angular/core';

enableProdMode();

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    appRouterProviders,
    HTTP_PROVIDERS,
    AuthGuard
])
    .catch(err => console.error(err));
