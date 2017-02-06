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
var router_1 = require("@angular/router");
var toastr_ng2_1 = require("toastr-ng2");
var index_1 = require("../_services/index");
var ContactComponent = (function () {
    function ContactComponent(route, router, contactService, alertService, toastrService) {
        this.route = route;
        this.router = router;
        this.contactService = contactService;
        this.alertService = alertService;
        this.toastrService = toastrService;
        this.model = {};
        this.loading = false;
        this.mapTitle = 'Map Address';
        this.lat = 10.200905;
        this.lng = -71.314232;
        this.title = 'Datos de Contacto';
        this.content = '<div class="contact-data"><strong>Direccion:</strong><address>Calle Venecia, Oficinas Softars, Ciudad Ojeda, Edo. Zulia, Venezuela.</address><strong>Telefono: </strong><span>+58 265 000 00 00</span></div>';
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.returnUrl = '/contactenos';
    };
    ContactComponent.prototype.contact = function () {
        var _this = this;
        this.loading = true;
        this.contactService.contact(this.model.name, this.model.email, this.model.subject, this.model.body)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
            _this.loading = false;
            _this.model.name = '';
            _this.model.subject = '';
            _this.model.email = '';
            _this.model.body = '';
        }, function (error) {
            _this.toastrService.error(error, '¡Error!');
            _this.loading = false;
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'contact.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        index_1.ContactService,
        index_1.AlertService,
        toastr_ng2_1.ToastrService])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map