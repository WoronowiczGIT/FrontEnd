import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-kursik';
  someString = 'component data';
  pi = Math.PI;
  date = new Date();
  // tslint:disable-next-line: no-use-before-declare


  dogs = new Array<Dog>();

  constructor() {
    // tslint:disable-next-line: no-use-before-declare
    this.dogs.push(new Dog('szarik', 2), new Dog('reksio', 3), new Dog('maksiu', 25));
  }
  inputText = 'some text';
  inputTwoWay = '';
  showClick = '';
  isbuttON = true;
  callClick(event) {
    this.showClick = 'event zarejestrowany';
    this.isbuttON = false;
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


