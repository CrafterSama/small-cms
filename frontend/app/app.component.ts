import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

import { TranslateService } from 'ng2-translate';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
	currentDate = new Date();
	location: Location;
	constructor	(
        location: Location,
        private translate: TranslateService) {
            translate.addLangs(['en', 'es']);
            let language = window.navigator.userLanguage || window.navigator.language;
            let localLang = window.localStorage.getItem('SoftArsLanguage');
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

    changeLang(lang: string) {
        this.translate.use(lang);
        window.localStorage.setItem('SoftArsLanguage', lang);
    }

    isHidden() {
        let list = [ "/login", "/registro", "/dashboard", "/login?returnUrl=%2Fdashboard" ],
        route = this.location.path();

        return (list.indexOf(route) > -1);
    }
}