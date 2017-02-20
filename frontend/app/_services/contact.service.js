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
var http_1 = require("@angular/http");
var toastr_ng2_1 = require("toastr-ng2");
require("rxjs/add/operator/map");
var index_1 = require("../_services/index");
var ContactService = (function () {
    function ContactService(http, alertService, toastrService) {
        this.http = http;
        this.alertService = alertService;
        this.toastrService = toastrService;
        this.CONTACT_URL = 'http://localhost:8000/api/contact';
    }
    ContactService.prototype.contact = function (name, email, subject, body) {
        var _this = this;
        return this.http.post(this.CONTACT_URL, { name: name, email: email, subject: subject, body: body })
            .map(function (response) {
            // Estatus Ok
            var res = response.json();
            if (res.status == 'ok') {
                // Mensaje de Alerta con confirmacion del mismo
                _this.toastrService.success(res.message, '¡Envio Exitoso!');
            }
        });
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        index_1.AlertService,
        toastr_ng2_1.ToastrService])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map