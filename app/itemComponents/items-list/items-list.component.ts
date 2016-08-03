import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Http, Headers }           from '@angular/http';
import { Router }                  from '@angular/router';

import {
    Item,
    ItemService,
    Notification,
    NotificationService,
    AuthenticationService
}           from '../../shared';

@Component({
    moduleId: module.id,
    selector: 'items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['items-list.component.css']
})

export class ItemsListComponent implements OnInit, OnDestroy {

    items: Item[];
    errorMessage: string;
    notification: Notification;

    /**
     * ItemsListComponent constructor
     * @param  {ItemService} private itemService module ItemService injected into constructor
     * @param  {Router}      private router      module Router injected into constructor
     * @param  {Http}        private http        module Http injected into constructor
     */
    constructor(
        private itemService: ItemService,
        private router: Router,
        private http: Http,
        private notificationService: NotificationService,
        private authenticationService: AuthenticationService
    ) { }

    /**
     * loads items on module initiation
     * @return {Observable<Item[]>} return an array of items the the html page
     */
    ngOnInit() {
        this.getItems();
    }

    /**
     * subscribe to an observable getItems(): Observable<Item[]>
     * get all items from itemService
     * @return {Item[]} returns an array of Items
     */
    private getItems() {
        this.itemService.getItems()
            .subscribe(
            data => {
                this.items = data
                console.log('Items successfully loaded');
            },
            error => {
                this.errorMessage = <any>error
                console.log(error)
            });
    }

    delete(item: Item) {
        //filters out the selected item object from the items array
        this.items = this.items
            .filter(i => i !== item);

        this.notificationService
            .notifyDelete("You really want to delete: " + item.title);

        this.itemService
            .delete(item.id)
            .subscribe(
            () => {
                console.log("delete succesfull");
                this.notificationService
                    .notify(item.title + ": deleted successfully", true);
                this.getNotification();
            },
            error => {
                this.errorMessage = <any>error;
                this.notificationService
                    .notify("Failed to deleted: " + item.title, false);
                this.getNotification();
            });
    }

    private getNotification() {
        this.notification = new Notification();
        this.notification = this.notificationService.getNotification();
    }


    /**
     * navigates to ItemDetailComponent
     * @param  {number} id the id of an object
     */
    gotoDetail(id: number) {
        this.router.navigate(['/item-detail', id]);
    }

    gotoCreate() {
        this.router.navigate(['/item-add']);
    }

    gotoEdit(id: number) {
        this.router.navigate(['/item-edit', id]);
    }

    ngOnDestroy() {
    }

    logout(event) {
        event.preventDefault();
        this.authenticationService.
            logout()
            .subscribe(
            () => {
                console.log('Logout successfully');
                this.router.navigate(['/login']);
            },
            error => {
                this.errorMessage = <any>error
                console.log(error)
            });
    }

}
