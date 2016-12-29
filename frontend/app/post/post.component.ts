import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { User } from '../_models/index';
import { Post } from '../_models/index';
import { UserService } from '../_services/index';
import { PostService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'post.component.html'
})

export class PostComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    posts: Post[] = [];

    constructor(
        private userService: UserService,
        private postService: PostService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllPosts();
        // reset login status

        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    deletePost(id: number) {
        this.postService.delete(id).subscribe(() => { this.loadAllPosts() });
    }

    private loadAllPosts() {
        this.postService.getAll().subscribe(posts => { this.posts = posts; });
    }
}