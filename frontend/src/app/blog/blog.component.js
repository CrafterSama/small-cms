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
var index_1 = require("../_services/index");
var index_2 = require("../_services/index");
var index_3 = require("../_services/index");
var BlogComponent = (function () {
    function BlogComponent(postService, userService, route, router, authenticationService, alertService) {
        this.postService = postService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.posts = [];
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.loadAllPosts();
    };
    BlogComponent.prototype.loadAllPosts = function () {
        var _this = this;
        this.postService.getAll().subscribe(function (posts) { _this.posts = posts; });
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'blog.component.html'
    }),
    __metadata("design:paramtypes", [index_2.PostService,
        index_3.UserService,
        router_1.ActivatedRoute,
        router_1.Router,
        index_1.AuthenticationService,
        index_1.AlertService])
], BlogComponent);
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map