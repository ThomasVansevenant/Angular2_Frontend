import { Component } from '@angular/core';

import { ItemFormComponent } from '../item-form/item-form.component';

@Component({
    moduleId: module.id,
    selector: 'item-add',
    templateUrl: './item-add.component.html',
    directives: [ItemFormComponent],
    styleUrls: ['item-add.component.css']

})

export class ItemAddComponent { }
