import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthenticationService {

    constructor(private http: Http) { }

    LOGIN_URL: string = 'http://localhost:8000/api/auth/login';

    login( email: string, password: string ) {
        return this.http.post(this.LOGIN_URL, { email: email, password: password } )
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user.status == 'ok') {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}