import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylowanie',
  templateUrl: './stylowanie.component.html',
  styleUrls: ['./stylowanie.component.css']
})
export class StylowanieComponent implements OnInit {
  taskList = ['one', 'two', 'three', 'four', 'five'];
  textField = '';

  taskList2 = [];
  textField2 = '';
  constructor() { }

  ngOnInit() {
  }


  getColor(): string {
    return this.taskList.length >= 4 ? 'red' : 'blue';
  }
}
