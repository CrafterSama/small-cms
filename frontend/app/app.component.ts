import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
	currentDate = new Date();
	location: Location;
	constructor	(location: Location) { this.location = location; }

    isHidden() {
        let list = [ "/login", "/registro", "/dashboard", "/login?returnUrl=%2Fdashboard" ],
        route = this.location.path();

        return (list.indexOf(route) > -1);
    }
}