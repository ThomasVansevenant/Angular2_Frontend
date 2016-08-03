/**
 * Handles the authentication request to the api
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../services/config.service';

@Injectable()
export class AuthenticationService {

    private authenticationUri: string;

    constructor(
        private http: Http,
        private configService: ConfigService) {
        this.authenticationUri = this.configService.getAuthenticationUri();
    }

    login(username: string, password: string) {
      console.log(this.authenticationUri + 'login?username=' + username + '&password=' + password);
        return this.http
            .get(this.authenticationUri + 'login?username=' + username + '&password=' + password)
            .catch(this.handleError);
    }

    signup(username: string, password: string) {
      console.log(this.authenticationUri + 'register?username=' + username + '&password=' + password);
        return this.http
            .get(this.authenticationUri + 'register?username=' + username + '&password=' + password)
            .catch(this.handleError);
    }
    logout(){
      return this.http
          .get(this.authenticationUri + 'logout')
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
