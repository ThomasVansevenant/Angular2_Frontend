"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var shared_1 = require('./shared');
var core_1 = require('@angular/core');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    app_routes_1.appRouterProviders,
    http_1.HTTP_PROVIDERS,
    shared_1.AuthGuard
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map