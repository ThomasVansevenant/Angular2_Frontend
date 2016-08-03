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
    function ItemsListComponent(itemService, router, http, notificationService, authenticationService) {
        this.itemService = itemService;
        this.router = router;
        this.http = http;
        this.notificationService = notificationService;
        this.authenticationService = authenticationService;
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
    ItemsListComponent.prototype.delete = function (item) {
        var _this = this;
        //filters out the selected item object from the items array
        this.items = this.items
            .filter(function (i) { return i !== item; });
        this.notificationService
            .notifyDelete("You really want to delete: " + item.title);
        this.itemService
            .delete(item.id)
            .subscribe(function () {
            console.log("delete succesfull");
            _this.notificationService
                .notify(item.title + ": deleted successfully", true);
            _this.getNotification();
        }, function (error) {
            _this.errorMessage = error;
            _this.notificationService
                .notify("Failed to deleted: " + item.title, false);
            _this.getNotification();
        });
    };
    ItemsListComponent.prototype.getNotification = function () {
        this.notification = new shared_1.Notification();
        this.notification = this.notificationService.getNotification();
    };
    /**
     * navigates to ItemDetailComponent
     * @param  {number} id the id of an object
     */
    ItemsListComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/item-detail', id]);
    };
    ItemsListComponent.prototype.gotoCreate = function () {
        this.router.navigate(['/item-add']);
    };
    ItemsListComponent.prototype.gotoEdit = function (id) {
        this.router.navigate(['/item-edit', id]);
    };
    ItemsListComponent.prototype.ngOnDestroy = function () {
    };
    ItemsListComponent.prototype.logout = function (event) {
        var _this = this;
        event.preventDefault();
        this.authenticationService.
            logout()
            .subscribe(function () {
            console.log('Logout successfully');
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.errorMessage = error;
            console.log(error);
        });
    };
    ItemsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'items-list',
            templateUrl: './items-list.component.html',
            styleUrls: ['items-list.component.css']
        }), 
        __metadata('design:paramtypes', [shared_1.ItemService, router_1.Router, http_1.Http, shared_1.NotificationService, shared_1.AuthenticationService])
    ], ItemsListComponent);
    return ItemsListComponent;
}());
exports.ItemsListComponent = ItemsListComponent;
//# sourceMappingURL=items-list.component.js.map