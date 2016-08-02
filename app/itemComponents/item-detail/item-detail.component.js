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
var shared_1 = require('../../shared');
var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemService, route, router) {
        this.itemService = itemService;
        this.route = route;
        this.router = router;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        this.getItemById();
    };
    /**
     * subscribe to an observable getItemById(id: number): Observable<Item>
     * get all items from itemService
     * @return {Item[]} returns an Item
     */
    ItemDetailComponent.prototype.getItemById = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.itemService.getItemById(id)
            .subscribe(function (data) {
            _this.item = data;
            console.log('Item successfully loaded');
        }, function (error) {
            _this.errorMessage = error;
            console.log(error);
        });
    };
    ItemDetailComponent.prototype.goBack = function () {
        this.router.navigate(['/items-list']);
    };
    ItemDetailComponent.prototype.ngOnDestroy = function () {
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'item-detail',
            templateUrl: './item-detail.component.html',
            styleUrls: ['item-detail.component.css']
        }), 
        __metadata('design:paramtypes', [shared_1.ItemService, router_1.ActivatedRoute, router_1.Router])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item-detail.component.js.map