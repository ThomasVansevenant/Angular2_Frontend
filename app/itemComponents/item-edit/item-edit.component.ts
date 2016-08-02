import { Component } from '@angular/core';
import { ActivatedRoute }          from '@angular/router';

import { ItemFormComponent } from '../item-form/item-form.component';

@Component({
    moduleId: module.id,
    selector: 'item-edit',
    templateUrl: './item-edit.component.html',
    directives: [ItemFormComponent],
    styleUrls: ['item-edit.component.css']
})

export class ItemEditComponent {
    id: number;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.getId()
    }

    private getId() {
        let id = +this.route.snapshot.params['id'];
        this.id = id;
    }
}
