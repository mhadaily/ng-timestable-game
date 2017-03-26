import {Component, Input, OnInit} from '@angular/core';

@Component({
  host: { 'class' : 'top-fish'},
  selector: 'app-top-fishes',
  template: `<svg version="1.1"
xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
x="0" y="0"  viewBox="0 0 300.25 121.947" [style.width]="width"
xml:space="preserve"><path [style.opacity]="opacity" [style.fill]="fill" d="M245.304,77.979c0,0-164.531,55.951-245.304-59.486c0,0,18.474-28.435,101.019-14.786
	c50.856,8.349,86.701,26.087,133.274,52.305c29.29,16.505,51.246-7.301,65.957-20.14l-5.496,29.323l-16.505,9.159l18.323,5.496
	v42.096C296.573,121.947,274.94,67.834,245.304,77.979z"/></svg>`,
  styleUrls: ['./top-fishes.component.scss'],

})
export class TopFishesComponent implements OnInit {
  @Input() opacity: string;
  @Input() fill: number;
  @Input() width: number;

  constructor() {
  }

  ngOnInit(){
  }

}
