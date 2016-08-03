import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../services/config.service';

@Injectable()
export class AuthenticationService {

    private apiURI: string;

    constructor(
        private http: Http,
        private configService: ConfigService) {
        this.apiURI = this.configService.getApiURI();
    }

    //http://localhost/CakePhp2_Code_dOr/api/access/login?username=test&password=12345
    //this.apiURI + 'access/login?username=' + username + '&password=' + password
    login(username: string, password: string) {
        return this.http
            .get('http://localhost/CakePhp2_Code_dOr/api/access/login?username=' + username + '&password=' + password)
            .catch(this.handleError);
    }

    //api/access/register?username=test&password=12345
    signup(username: string, password: string) {
        return this.http
            .get(this.apiURI + 'access/register?username=' + username + '&password=' + password)
            .catch(this.handleError);
    }

    /**
     * Handles http error
     * @returs Observable.throw thows the error message
     */
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
