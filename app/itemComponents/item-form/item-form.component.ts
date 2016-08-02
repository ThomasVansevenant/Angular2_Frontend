import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { ActivatedRoute, Router }    from '@angular/router';

import {
    Item,
    ItemService,
    NotificationService
} from '../../shared';

@Component({
    moduleId: module.id,
    selector: 'item-form',
    templateUrl: './item-form.component.html',
    styleUrls: ['./item-form.component.css']
})

export class ItemFormComponent implements OnInit, OnDestroy {
    @Input() item: Item;
    @Input() id: number;
    submitted = false;
    active = true;
    errorMessage: string;

    /**
     * ItemFormComponent constructor
     * @param  {ItemService}         private itemService         module ItemService injected into constructor
     * @param  {Router}              private router              module Router injected into constructor
     * @param  {ActivatedRoute}      private Route               module Route injected into constructor
     * @param  {NotificationService} private NotificationService module NotificationService injected into constructor
     */
    constructor(
        private itemService: ItemService,
        private router: Router,
        private route: ActivatedRoute,
        private notificationService: NotificationService
    ) { }

    /**
     * loads item by id  on module initiation
     * creates an new item on initiation
     */
    ngOnInit() {
        this.getItemById();
        this.item = new Item();
    }

    gotoConfirmation() {
        this.active = false;
        this.submitted = true;
    }

    /**
     * subscribe to save(item: Item) from ItemService
     * saves an item
     * @param  {Item}   item the item that needs to be saved from the form.
     * @return {[type]}      [description]
     */
    save() {
        this.itemService.save(this.item)
            .subscribe(
            () => {
                this.active = false,
                    this.submitted = true,
                    this.notificationService.notify('Successfully Submitted!', true),
                    this.router.navigate(['/items-list']);
            },
            err => {
                this.notificationService.notify('Failed to Submit!', false),
                    this.router.navigate(['/items-list']),
                    console.log(err)
            });
    }

    editConfirmation() {
        this.active = true;
        this.submitted = false;
    }

    private getItemById() {
        if (this.id) {
            this.itemService
                .getItemById(this.id)
                .subscribe(
                data => {
                    this.item = data
                },
                error => {
                    console.log("Failed to load list of items!");
                    this.errorMessage = <any>error;
                    this.notificationService
                        .notify("Failed to load list of items! Please try again", false);
                });
        }
    }

    clearForm() {
        this.item = new Item();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    goBack() {
        this.router.navigate(['/items-list']);
    }

    ngOnDestroy() {
    }



}
