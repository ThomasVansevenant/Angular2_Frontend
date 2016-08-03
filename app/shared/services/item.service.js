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
var config_service_1 = require('./config.service');
var ItemService = (function () {
    /**
     * ItemsService constructor
     * @param  {Http}   private http Http module injected into constructor
     * @param  {ConfigService}   private configService ConfigService module injected into constructor
     */
    function ItemService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.apiURI = this.configService.getApiURI();
    }
    /**
     * Gets all items from the api
     * @return {Observable<Item[]>} returns an Observable that maps the json respond to an array of Items by casting
     */
    ItemService.prototype.getItems = function () {
        return this.http
            .get(this.apiURI + 'items')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
     * Gets an item from the api
     * @param  {number} id the id of an object
     * @return {Observable<Item>}    [description]
     */
    ItemService.prototype.getItemById = function (id) {
        return this.http
            .get(this.apiURI + 'itemById?id=' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ItemService.prototype.createNewItem = function (item) {
        var json = JSON.stringify(item);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apiURI + 'create', json, options)
            .catch(this.handleError);
    };
    ItemService.prototype.updateItem = function (item) {
        var json = JSON.stringify(item);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.apiURI + 'edit', json, options)
            .catch(this.handleError);
    };
    ItemService.prototype.save = function (item) {
        if (item.id) {
            return this.updateItem(item);
        }
        else {
            return this.createNewItem(item);
        }
    };
    ItemService.prototype.delete = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete(this.apiURI + 'delete?id=' + id, options)
            .catch(this.handleError);
    };
    /**
     * Handles http error
     * @returs Observable.throw thows the error message
     */
    ItemService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map