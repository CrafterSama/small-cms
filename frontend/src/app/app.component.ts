import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

import { TranslateService } from 'ng2-translate';

import { User } from './_models/index';
import { UserService } from './_services/index';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    isVisible : boolean = false;
	currentDate = new Date();
    currentUser: User;
    users: User[] = [];
	location: Location;
    login: boolean = false;
    public isCollapsed:boolean = true;
    public collapsed(event:any):void {
        // console.log(event);
    }
    public expanded(event:any):void {
        // console.log(event);
    }
    public items:string[] = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];
 
    public toggled(open:boolean):void {
        console.log('Dropdown is now: ', open);
    }

	constructor	(
        location: Location,
        private translate: TranslateService,
        private userService: UserService) {
            translate.addLangs(['en', 'es']);
            let language = window.navigator.language;
            let localLang = window.localStorage.getItem('SoftArsLanguage');
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if(localLang == null) {
                if (language == 'en-US') {
                    translate.use('en');
                }
                else {
                    translate.setDefaultLang('es');
                }
            }
            else {
                translate.use(localLang);
            }
            this.location = location;
        }
    
    logStatus() {
        if( this.currentUser != undefined ) {
            return this.login = true;
        }
    }

    changeLang(lang: string) {
        this.translate.use(lang);
        window.localStorage.setItem('SoftArsLanguage', lang);
    }

    isHidden() {
        let list = [ "/login", "/register", "/dashboard", "/login?returnUrl=%2Fdashboard" ],
        route = this.location.path();

        return (list.indexOf(route) > -1);
    }
}