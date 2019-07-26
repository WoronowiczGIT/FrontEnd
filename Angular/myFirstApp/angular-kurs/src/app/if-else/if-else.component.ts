import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent implements OnInit {

  days = ['poniedzialek', 'wtorek', 'sroda', 'czwartek', 'piatek', 'sobota', 'niedziela'];

  a = 10;
  b = 7;

  isVis = false;
  isHid = false;

  cars = new Array<Car>();
  constructor() {
    // tslint:disable-next-line: no-use-before-declare
    this.cars.push(new Car("VW", 'trytytyty'), new Car('Porshe', 'wrrrrrum'), new Car('Mazda', 'Ziuu Ziuu'));
  }

  show1() {
    if (this.isVis) {
      this.isVis = false;
    } else {
      this.isVis = true;
    }
  }
  show2() {
    if (this.isHid) {
      this.isHid = false;
    } else {
      this.isHid = true;
    }
  }

  ngOnInit() {
  }


}
class Car {
  constructor(public model: string, public sound: string) { }
  start() {
    return this.model + ' makes ' + this.sound;
  }
}
