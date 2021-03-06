import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    refresh() {
        return this.http.get('http://api.softars.com/api/refresh', this.jwt()).map((response: Response) => response.json());
    }

    getAll() {
        return this.http.get('http://api.softars.com/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('http://api.softars.com/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('http://api.softars.com/api/auth/signup', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('http://api.softars.com/api/users/', user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('http://api.softars.com/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            //console.log(currentUser.token);
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            //console.log(headers);
            return new RequestOptions({ headers: headers });
        }
    }
}