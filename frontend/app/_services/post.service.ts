import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Post } from '../_models/index';

@Injectable()
export class PostService {
    constructor(private http: Http) { }

    refresh() {
        return this.http.get('http://localhost:8000/api/refresh', this.jwt()).map((response: Response) => response.json());
    }

    getAll() {
        return this.http.get('http://localhost:8000/api/posts', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('http://localhost:8000/api/posts/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(post: Post) {
        return this.http.post('http://localhost:8000/api/posts/', post, this.jwt()).map((response: Response) => response.json());
    }

    update(post: Post) {
        return this.http.put('http://localhost:8000/api/posts/', post, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('http://localhost:8000/api/posts/' + id, this.jwt()).map((response: Response) => response.json());
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