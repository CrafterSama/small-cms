import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AlertService } from '../_services/index';

@Injectable()
export class ContactService {

    constructor(
        private http: Http,
        private alertService: AlertService) { }

    CONTACT_URL: string = 'http://localhost:8000/api/contact';

    contact( name: string, email: string, subject: string, body: string ) {
        return this.http.post(this.CONTACT_URL, { name: name, email: email, subject: subject, body: body } )
            .map((response: Response) => {
                // Estatus Ok
                let res = response.json();
                if (res.status == 'ok') {
                    // Mensaje de Alerta con confirmacion del mismo
                    this.alertService.success(res.message, true);
                }
            });
    }
}