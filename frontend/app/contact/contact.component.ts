import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AlertService, UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'contact.component.html'
})


export class ContactComponent implements OnInit {

	constructor (private alertService: AlertService) {}

	title: string = 'Datos de Contacto';
	content: string = '<div class="contact-data"><strong>Direccion:</strong><address>Calle Venecia, Oficinas Softars, Ciudad Ojeda, Edo. Zulia, Venezuela</address><br /><strong>Telefono: </strong><span>+58 265 000 00 00</span></div>';

	ngOnInit() {

    }

}