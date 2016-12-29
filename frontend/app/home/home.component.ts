import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { Post } from '../_models/index';
import { User } from '../_models/index';
import { PostService } from '../_services/index';
import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
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