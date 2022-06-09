import {Component}from '@angular/core'

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{title}}</h1>
    <h3>Start: <strong>{{base}}</strong></h3>

    <button (click)="count(base)">+{{base}}</button>
      <span> {{number}} </span>
    <button (click)="count(-base)">-{{base}}</button>
  `

})

export class CounterComponent {
  title: string = 'Counter App';
  number: number = 10;
  base: number = 5;

  count(value: number) {
    this.number += value;
  }

}
