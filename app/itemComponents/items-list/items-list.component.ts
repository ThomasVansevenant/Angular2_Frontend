import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Http, Headers }           from '@angular/http';
import { Router }                  from '@angular/router';

import {
    Item,
    ItemService}                    from '../../shared';

@Component({
    moduleId: module.id,
    selector: 'items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['items-list.component.css']
})

export class ItemsListComponent implements OnInit, OnDestroy {

    items: Item[];
    errorMessage: string;

    /**
     * ItemsListComponent constructor
     * @param  {ItemService} private itemService module ItemService injected into constructor
     * @param  {Router}      private router      module Router injected into constructor
     * @param  {Http}        private http        module Http injected into constructor
     */
    constructor(
        private itemService: ItemService,
        private router: Router,
        private http: Http
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
}
