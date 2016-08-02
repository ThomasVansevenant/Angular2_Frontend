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
var ItemFormComponent = (function () {
    /**
     * ItemFormComponent constructor
     * @param  {ItemService}         private itemService         module ItemService injected into constructor
     * @param  {Router}              private router              module Router injected into constructor
     * @param  {ActivatedRoute}      private Route               module Route injected into constructor
     * @param  {NotificationService} private NotificationService module NotificationService injected into constructor
     */
    function ItemFormComponent(itemService, router, route, notificationService) {
        this.itemService = itemService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.submitted = false;
        this.active = true;
    }
    /**
     * loads item by id  on module initiation
     * creates an new item on initiation
     */
    ItemFormComponent.prototype.ngOnInit = function () {
        this.getItemById();
        this.item = new shared_1.Item();
    };
    ItemFormComponent.prototype.gotoConfirmation = function () {
        this.active = false;
        this.submitted = true;
    };
    /**
     * subscribe to save(item: Item) from ItemService
     * saves an item
     * @param  {Item}   item the item that needs to be saved from the form.
     * @return {[type]}      [description]
     */
    ItemFormComponent.prototype.save = function () {
        var _this = this;
        this.itemService.save(this.item)
            .subscribe(function () {
            _this.active = false,
                _this.submitted = true,
                _this.notificationService.notify('Successfully Submitted!', true),
                _this.router.navigate(['/items-list']);
        }, function (err) {
            _this.notificationService.notify('Failed to Submit!', false),
                _this.router.navigate(['/items-list']),
                console.log(err);
        });
    };
    ItemFormComponent.prototype.editConfirmation = function () {
        this.active = true;
        this.submitted = false;
    };
    ItemFormComponent.prototype.getItemById = function () {
        var _this = this;
        if (this.id) {
            this.itemService
                .getItemById(this.id)
                .subscribe(function (data) {
                _this.item = data;
            }, function (error) {
                console.log("Failed to load list of items!");
                _this.errorMessage = error;
                _this.notificationService
                    .notify("Failed to load list of items! Please try again", false);
            });
        }
    };
    ItemFormComponent.prototype.clearForm = function () {
        var _this = this;
        this.item = new shared_1.Item();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    ItemFormComponent.prototype.ngOnDestroy = function () {
    };
    Object.defineProperty(ItemFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.item); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', shared_1.Item)
    ], ItemFormComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ItemFormComponent.prototype, "id", void 0);
    ItemFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'item-form',
            templateUrl: './item-form.component.html',
            styleUrls: ['./item-form.component.css']
        }), 
        __metadata('design:paramtypes', [shared_1.ItemService, router_1.Router, router_1.ActivatedRoute, shared_1.NotificationService])
    ], ItemFormComponent);
    return ItemFormComponent;
}());
exports.ItemFormComponent = ItemFormComponent;
//# sourceMappingURL=item-form.component.js.map