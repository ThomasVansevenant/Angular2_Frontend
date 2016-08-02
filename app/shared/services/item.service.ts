import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Item } from '../../shared';

@Injectable()
export class ItemService {

    /**
     * ItemsService constructor
     * @param  {Http}   private http Http module injected into constructor
     */
    constructor(private http: Http) {
    }

    /**
     * Gets all items from the api
     * @return {Observable<Item[]>} returns an Observable that maps the json respond to an array of Items by casting
     */
    getItems(): Observable<Item[]> {
        return this.http.get('http://localhost/CakePhp2_api/items')
            .map(res => <Item[]>res.json())
            .catch(this.handleError);
    }

    /**
     * Gets an item from the api
     * @param  {number} id the id of an object
     * @return {Observable<Item>}    [description]
     */
    getItemById(id: number): Observable<Item> {
        return this.http.get('http://localhost/CakePhp2_api/items/' + id)
            .map(response => <Item>response.json())
            .catch(this.handleError);
    }

    /**
     * Handled http error
     * @returs Observable.throw thows the error message
     */
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);

    }
}
