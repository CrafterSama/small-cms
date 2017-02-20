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
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.refresh = function () {
        return this.http.get('http://localhost:8000/api/refresh', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getAll = function () {
        return this.http.get('http://localhost:8000/api/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('http://localhost:8000/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('http://localhost:8000/api/auth/signup', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('http://localhost:8000/api/users/', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('http://localhost:8000/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            //console.log(currentUser.token);
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            //console.log(headers);
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map