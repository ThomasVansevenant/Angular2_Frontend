import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { CORE_DIRECTIVES }         from '@angular/common';
import { Http, Headers }           from '@angular/http';
import { ActivatedRoute, Router }          from '@angular/router';

import {
    Item,
    ItemService} from '../../shared';

@Component({
    moduleId: module.id,
    selector: 'item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['item-detail.component.css']
})

export class ItemDetailComponent implements OnInit, OnDestroy {

    item: Item;
    errorMessage: string;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.getItemById();
    }
    /**
     * subscribe to an observable getItemById(id: number): Observable<Item>
     * get all items from itemService
     * @return {Item[]} returns an Item
     */
    private getItemById() {
        let id = +this.route.snapshot.params['id'];
        this.itemService.getItemById(id)
            .subscribe(
            data => {
                this.item = data
                console.log('Item successfully loaded');
            },
            error => {
                this.errorMessage = <any>error
                console.log(error);
            });
    }

    goBack(){
      this.router.navigate(['/items-list']);
    }


    ngOnDestroy() {
    }

}
