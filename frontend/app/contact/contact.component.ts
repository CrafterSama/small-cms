import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'contact.component.html'
})


export class ContactComponent implements OnInit {

	constructor (private alertService: AlertService) {}

	title: string = 'Formulario de Contacto';
	content: string = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan ipsum nisl, at accumsan nisl placerat non. Mauris porttitor convallis pharetra. Sed commodo malesuada dolor ac interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc interdum nulla auctor nulla volutpat, vitae fringilla velit blandit. Maecenas est quam, imperdiet in diam non, rutrum tempus sem. Cras volutpat mi vitae malesuada pulvinar. Nulla placerat mauris nec rutrum aliquet.</p>';

	ngOnInit() {

    }

}