import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() { }
  title = 'angular-kursik';
  someString = 'component data';
  pi = Math.PI;
  date = new Date();
  // tslint:disable-next-line: no-use-before-declare
  dog = new Dog('pipek', 3);
  dog2: Dog;

  ngOnInit() {
  }
  showDog() {
    return 'my dogo is' + this.dog.name + ' and he is ' + this.dog.age + ' years old';
  }

}
class Dog {
  constructor(public name: string, public age: number) {
  }
  bark() {
    // adnotacja this. jest konieczna
    return this.name + ' barks';
  }
}
