import {Component} from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        animate(4000, keyframes([
          style({opacity: 0, transform: 'translateX(100%)', offset: 0}),
          style({opacity: .25, transform: 'translateX(75%)', offset: 0.25}),
          style({opacity: .5, transform: 'translateX(50%)', offset: 0.5}),
          style({opacity: .75, transform: 'translateX(25%)', offset: 0.75}),
          style({opacity: 1, transform: 'translateX(0%)', offset: 1}),
        ]))
      ]),
      transition('* => void', [
        animate(4000, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: .25, transform: 'translateX(-75%)', offset: 0.25}),
          style({opacity: .5, transform: 'translateX(-50%)', offset: 0.5}),
          style({opacity: .75, transform: 'translateX(-25%)', offset: 0.75}),
          style({opacity: 1, transform: 'translateX(0%)', offset: 1}),
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    // setInterval(() => {
    //   this.state = this.state === "right" ? "left" : "right";
    // }, 7000)
  }

}
