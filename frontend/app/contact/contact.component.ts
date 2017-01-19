import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'toastr-ng2';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AlertService, UserService, ContactService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'contact.component.html'
})


export class ContactComponent {
    model: any = {};
    loading = false;
    mapTitle: string = 'Map Address';
	lat: number = 10.200905;
	lng: number = -71.314232;
    returnUrl: string;

	constructor (
        private route: ActivatedRoute,
        private router: Router,
        private contactService: ContactService,
        private alertService: AlertService,
        private toastrService: ToastrService) { }

	title: string = 'Datos de Contacto';
	content: string = '<div class="contact-data"><strong>Direccion:</strong><address>Calle Venecia, Oficinas Softars, Ciudad Ojeda, Edo. Zulia, Venezuela.</address><strong>Telefono: </strong><span>+58 265 000 00 00</span></div>';

	ngOnInit() {
        this.returnUrl = '/contactenos'
    }

    contact() {
        this.loading = true;
        this.contactService.contact(this.model.name, this.model.email, this.model.subject, this.model.body)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    this.loading = false;
                    this.model.name = '';
                    this.model.subject = '';
                    this.model.email = '';
                    this.model.body = '';
                },
                error => {
                    this.toastrService.error(error, '¡Error!');
                    this.loading = false;
                });
    }

}