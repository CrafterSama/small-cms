import { 
    Component, OnInit, OnChanges, Input, 
    trigger, state, animate, transition, style 
} from '@angular/core';

@Component({
  selector : 'my-fader',
  template: `
    <div class="container-full" [@visibilityChanged]="visibility">
        <alert class="text-center "></alert>
        <router-outlet></router-outlet>
    </div>
    `,
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ position: 'relative', left: -999, opacity: 0 })),
      state('hidden', style({ position: 'relative', left: 0, opacity: 1 })),
      transition('* => *', animate('.7s'))
    ])
  ]
})
export class FaderComponent implements OnChanges {
  @Input() isVisible : boolean = true;
  visibility = 'shown';

  ngOnChanges() {
     this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

}