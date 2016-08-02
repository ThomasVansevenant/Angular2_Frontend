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
var router_1 = require('@angular/router');
var shared_1 = require('../../shared');
var ItemsListComponent = (function () {
    /**
     * ItemsListComponent constructor
     * @param  {ItemService} private itemService module ItemService injected into constructor
     * @param  {Router}      private router      module Router injected into constructor
     * @param  {Http}        private http        module Http injected into constructor
     */
    function ItemsListComponent(itemService, router, http) {
        this.itemService = itemService;
        this.router = router;
        this.http = http;
    }
    /**
     * loads items on module initiation
     * @return {Observable<Item[]>} return an array of items the the html page
     */
    ItemsListComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    /**
     * subscribe to an observable getItems(): Observable<Item[]>
     * get all items from itemService
     * @return {Item[]} returns an array of Items
     */
    ItemsListComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems()
            .subscribe(function (data) {
            _this.items = data;
            console.log('Items successfully loaded');
        }, function (error) {
            _this.errorMessage = error;
            console.log(error);
        });
    };
    /**
     * navigates to ItemDetailComponent
     * @param  {number} id the id of an object
     */
    ItemsListComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/item-detail', id]);
    };
    ItemsListComponent.prototype.ngOnDestroy = function () {
    };
    ItemsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'items-list',
            templateUrl: './items-list.component.html',
            styleUrls: ['items-list.component.css']
        }), 
        __metadata('design:paramtypes', [shared_1.ItemService, router_1.Router, http_1.Http])
    ], ItemsListComponent);
    return ItemsListComponent;
}());
exports.ItemsListComponent = ItemsListComponent;
//# sourceMappingURL=items-list.component.js.map