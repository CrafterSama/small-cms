import { ComponentFactoryResolver,
    ViewChild, ViewContainerRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { Post } from '../_models/index';
import { User } from '../_models/index';
import { PostService } from '../_services/index';
import { UserService } from '../_services/index';
import { HeaderComponent } from '../common/index';
import { FooterComponent } from '../common/index';


@Component({
    moduleId: module.id,
    templateUrl: 'blog.component.html'
})

export class BlogComponent implements OnInit {
    currentUser: User;
    posts: Post[] = [];
    users: User[] = [];

    constructor(
        private postService: PostService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {

        this.loadAllPosts();
    }

    private loadAllPosts() {
        this.postService.getAll().subscribe(posts => { this.posts = posts; });
    }

}