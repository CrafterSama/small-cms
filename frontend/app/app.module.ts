import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { ToastrModule } from 'toastr-ng2';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";

//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, PostService, ContactService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { DashboardComponent } from './dashboard/index';
import { AboutComponent } from './about/index';
import { TeamComponent } from './team/index';
import { BlogComponent } from './blog/index';
import { ContactComponent } from './contact/index';
import { PostComponent } from './post/index';
import { HeaderComponent } from './common/index';
import { FooterComponent } from './common/index';

@NgModule({
    exports: [
        TranslateModule
    ],
    imports: [
        MaterialModule.forRoot(),
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyBtgMIZjc_tXj4a4yqGJRpaq2xTWHPfTZE' }),
        //AgmCoreModule.forRoot(),
        ToastrModule.forRoot(), // ToastrModule added
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http]
        }), // ToastrModule added
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        AboutComponent,
        TeamComponent,
        BlogComponent,
        ContactComponent,
        HeaderComponent,
        FooterComponent,
        PostComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        ContactService,
        UserService,
        PostService

    ],

    /*entryComponents: [ ModalContact ],*/
    bootstrap: [ AppComponent ],
    entryComponents: [HeaderComponent, FooterComponent ]
})

export class AppModule { }
export class PizzaPartyAppModule { }