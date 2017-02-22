import { Component, OnInit, OnChanges, Input, 
    trigger, state, animate, transition, style } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'team.component.html'
})

export class TeamComponent implements OnChanges, OnInit {
    isVisible : boolean = true;
    visibility = 'shown';
	ngOnChanges() {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    }
	ngOnInit() {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    }

}