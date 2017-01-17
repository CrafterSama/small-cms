import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//import { AgmCoreModule } from 'angular2-google-maps/core';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'contact.component.html'
})


export class ContactComponent {
    loading = false;
	lat: number = 10.200905;
	lng: number = -71.314232;
    CONTACT_URL: string = 'http://localhost:8000/api/contact';

	constructor (private alertService: AlertService) {}

	title: string = 'Datos de Contacto';
	content: string = '<div class="contact-data"><strong>Direccion:</strong><address>Calle Venecia, Oficinas Softars, Ciudad Ojeda, Edo. Zulia, Venezuela.</address><strong>Telefono: </strong><span>+58 265 000 00 00</span></div>';

	ngOnInit() {

    }

    login( name: string, email: string, subject: string, body: string ) {
    	this.loading = true;
        return this.http.post(this.CONTACT_URL, { name: name, email: email, subject: subject, body: body } )
            .map((response: Response) => {
                // Estatus Ok
                let response = response.json();
                if (response.status == 'ok') {
                    // Mensaje de Alerta con confirmacion del mismo
                    this.alertService.success('Mensaje Enviado', true);
                }
            });
    }

}