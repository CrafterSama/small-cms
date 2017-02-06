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
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var ng2_translate_1 = require("ng2-translate");
var AppComponent = (function () {
    function AppComponent(location, translate) {
        this.translate = translate;
        this.currentDate = new Date();
        this.isCollapsed = true;
        translate.addLangs(['en', 'es']);
        var language = window.navigator.language;
        var localLang = window.localStorage.getItem('SoftArsLanguage');
        if (localLang == null) {
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
    AppComponent.prototype.collapsed = function (event) {
        // console.log(event);
    };
    AppComponent.prototype.expanded = function (event) {
        // console.log(event);
    };
    AppComponent.prototype.changeLang = function (lang) {
        this.translate.use(lang);
        window.localStorage.setItem('SoftArsLanguage', lang);
    };
    AppComponent.prototype.isHidden = function () {
        var list = ["/login", "/registro", "/dashboard", "/login?returnUrl=%2Fdashboard"], route = this.location.path();
        return (list.indexOf(route) > -1);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [common_1.Location,
        ng2_translate_1.TranslateService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map