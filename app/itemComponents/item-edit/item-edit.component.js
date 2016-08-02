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
var item_form_component_1 = require('../item-form/item-form.component');
var ItemEditComponent = (function () {
    function ItemEditComponent(route) {
        this.route = route;
    }
    ItemEditComponent.prototype.ngOnInit = function () {
        this.getId();
    };
    ItemEditComponent.prototype.getId = function () {
        var id = +this.route.snapshot.params['id'];
        this.id = id;
    };
    ItemEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'item-edit',
            templateUrl: './item-edit.component.html',
            directives: [item_form_component_1.ItemFormComponent],
            styleUrls: ['item-edit.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ItemEditComponent);
    return ItemEditComponent;
}());
exports.ItemEditComponent = ItemEditComponent;
//# sourceMappingURL=item-edit.component.js.map