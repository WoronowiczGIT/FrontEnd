import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-ng-if',
  templateUrl: './ng-for-ng-if.component.html',
  styleUrls: ['./ng-for-ng-if.component.css']
})
export class NgForNgIFComponent implements OnInit {
  constructor() {
    // tslint:disable-next-line: no-use-before-declare
    this.cats.push(new Cat('filemon', 1), new Cat('Bonifacy', 13), new Cat('Klakier', 50));
  }
  cats = new Array<Cat>();
  dniTygodnia = ['pon', 'wtor', 'srod', 'czwar', 'piat', 'sob', 'niedz'];

  ngOnInit() {
  }

}
class Cat {
  constructor(public name: string, public age: number) { }
  meow() {
    return this.name + 'purr purr';
  }
}
