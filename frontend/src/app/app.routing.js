"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./post/index");
var index_5 = require("./about/index");
var index_6 = require("./team/index");
var index_7 = require("./blog/index");
var index_8 = require("./contact/index");
var index_9 = require("./dashboard/index");
var index_10 = require("./_guards/index");
var appRoutes = [
    /** Normal sections */
    { path: '', component: index_1.HomeComponent },
    { path: 'nosotros', component: index_6.TeamComponent },
    { path: 'blog', component: index_7.BlogComponent },
    { path: 'acerca-de', component: index_5.AboutComponent },
    { path: 'contactenos', component: index_8.ContactComponent },
    /** Login and registration */
    { path: 'login', component: index_2.LoginComponent },
    { path: 'registro', component: index_3.RegisterComponent },
    /** Login required sections */
    { path: 'dashboard', component: index_9.DashboardComponent, canActivate: [index_10.AuthGuard] },
    { path: 'dashboard/posts', component: index_4.PostComponent, canActivate: [index_10.AuthGuard] },
    /** Otherwise redirect to home */
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map