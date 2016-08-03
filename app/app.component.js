"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var shared_1 = require('./shared');
var itemComponents_1 = require('./itemComponents');
var authenticationComponents_1 = require('./authenticationComponents');
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './app.components.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                shared_1.ItemService,
                shared_1.ConfigService,
                shared_1.NotificationService,
                shared_1.AuthGuard,
                shared_1.AuthenticationService
            ],
            precompile: [
                itemComponents_1.ItemsListComponent,
                itemComponents_1.ItemDetailComponent,
                itemComponents_1.ItemAddComponent,
                itemComponents_1.ItemEditComponent,
                authenticationComponents_1.LoginComponent,
                authenticationComponents_1.SignupComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map