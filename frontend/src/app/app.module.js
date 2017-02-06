"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var core_2 = require("angular2-google-maps/core");
var toastr_ng2_1 = require("toastr-ng2");
var ng2_translate_1 = require("ng2-translate");
var ng2_bootstrap_1 = require("ng2-bootstrap");
//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { BaseRequestOptions } from '@angular/http';
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./_directives/index");
var index_2 = require("./_guards/index");
var index_3 = require("./_services/index");
var index_4 = require("./home/index");
var index_5 = require("./login/index");
var index_6 = require("./register/index");
var index_7 = require("./dashboard/index");
var index_8 = require("./about/index");
var index_9 = require("./team/index");
var index_10 = require("./blog/index");
var index_11 = require("./contact/index");
var index_12 = require("./post/index");
var index_13 = require("./common/index");
var index_14 = require("./common/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        exports: [
            ng2_translate_1.TranslateModule
        ],
        imports: [
            material_1.MaterialModule.forRoot(),
            core_2.AgmCoreModule.forRoot({ apiKey: 'AIzaSyBtgMIZjc_tXj4a4yqGJRpaq2xTWHPfTZE' }),
            //AgmCoreModule.forRoot(),
            toastr_ng2_1.ToastrModule.forRoot(),
            ng2_translate_1.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, '/assets/i18n', '.json'); },
                deps: [http_1.Http]
            }),
            ng2_bootstrap_1.CollapseModule.forRoot(),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.AlertComponent,
            index_4.HomeComponent,
            index_5.LoginComponent,
            index_6.RegisterComponent,
            index_7.DashboardComponent,
            index_8.AboutComponent,
            index_9.TeamComponent,
            index_10.BlogComponent,
            index_11.ContactComponent,
            index_13.HeaderComponent,
            index_14.FooterComponent,
            index_12.PostComponent
        ],
        providers: [
            index_2.AuthGuard,
            index_3.AlertService,
            index_3.AuthenticationService,
            index_3.ContactService,
            index_3.UserService,
            index_3.PostService
        ],
        /*entryComponents: [ ModalContact ],*/
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [index_13.HeaderComponent, index_14.FooterComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
var PizzaPartyAppModule = (function () {
    function PizzaPartyAppModule() {
    }
    return PizzaPartyAppModule;
}());
exports.PizzaPartyAppModule = PizzaPartyAppModule;
//# sourceMappingURL=app.module.js.map