import { ComponentFactoryResolver,
    ViewChild, ViewContainerRef, Component, OnInit, OnChanges, Input, 
    trigger, state, animate, transition, style } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { Post } from '../_models/index';
import { User } from '../_models/index';
import { PostService } from '../_services/index';
import { UserService } from '../_services/index';
import { HeaderComponent } from '../common/index';
import { FooterComponent } from '../common/index';
import { routerTransition } from '../app.routing.animations';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'/*,
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}*/
})

export class HomeComponent implements OnChanges, OnInit {
    currentUser: User;
    posts: Post[] = [];
    users: User[] = [];

    isVisible : boolean = true;
    visibility = 'shown';

    ngOnChanges() {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    }

    /*@ViewChild('header', {read: ViewContainerRef}) header: ViewContainerRef;
    @ViewChild('footer', {read: ViewContainerRef}) footer: ViewContainerRef;*/

    constructor(
        private postService: PostService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        /*private compFactoryResolver: ComponentFactoryResolver,*/
        private alertService: AlertService) {

        /*this.name = 'softars-cms'*/

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    /*addComponents() {

      let compFactory: ComponentFactory;

      compFactory = this.compFactoryResolver.resolveComponentFactory(HeaderComponent);
      this.header.createComponent(compFactory);


      compFactory = this.compFactoryResolver.resolveComponentFactory(FooterComponent);
      this.footer.createComponent(compFactory);
    }*/

    ngOnInit() {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    }

}