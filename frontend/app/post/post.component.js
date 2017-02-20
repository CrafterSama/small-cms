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
var PostComponent = (function () {
    function PostComponent(userService, postService, route, router, authenticationService, alertService) {
        this.userService = userService;
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.users = [];
        this.posts = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    PostComponent.prototype.ngOnInit = function () {
        this.loadAllPosts();
    };
    PostComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.postService.delete(id).subscribe(function () { _this.loadAllPosts(); });
    };
    PostComponent.prototype.loadAllPosts = function () {
        var _this = this;
        this.postService.getAll().subscribe(function (posts) { _this.posts = posts; });
    };
    return PostComponent;
}());
PostComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'post.component.html'
    }),
    __metadata("design:paramtypes", [index_2.UserService,
        index_3.PostService,
        router_1.ActivatedRoute,
        router_1.Router,
        index_1.AuthenticationService,
        index_1.AlertService])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map