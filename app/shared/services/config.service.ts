import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    private apiURI: string;

    constructor() {
        this.apiURI = 'http://localhost/CakePhp2_api/items/';
    }


/**
 * returns the api url
 * @return {string} the api uri
 */
    getApiURI() {
        return this.apiURI;
    }

}
