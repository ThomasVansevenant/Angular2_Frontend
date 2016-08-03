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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var config_service_1 = require('../services/config.service');
var AuthenticationService = (function () {
    function AuthenticationService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.authenticationUri = this.configService.getAuthenticationUri();
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http
            .get(this.authenticationUri + 'login?username=' + username + '&password=' + password)
            .catch(this.handleError);
    };
    AuthenticationService.prototype.signup = function (username, password) {
        return this.http
            .get(this.authenticationUri + 'register?username=' + username + '&password=' + password)
            .catch(this.handleError);
    };
    /**
     * Handles http error
     * @returs Observable.throw thows the error message
     */
    AuthenticationService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map