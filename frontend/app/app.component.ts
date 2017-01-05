import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

	currentDate = new Date();

	constructor(public dialog: MdDialog) {}

  	openDialog() {
		this.dialog.open(ModalContact);
  	}

}

@Component({
	selector: 'modal-contact',
	templateUrl: 'modal-contact.html'
})

export class ModalContact { }