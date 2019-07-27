import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdlproject',
  templateUrl: './tdlproject.component.html',
  styleUrls: ['./tdlproject.component.css']
})
export class TDLProjectComponent implements OnInit {

  newTask = 'some text';
  tasksList: Array<string> = [];
  taskDone: Array<string> = [];
  add() {
    this.tasksList.push(this.newTask);
    // czyszcenie pola po dodaniu
    this.newTask = '';
    console.log(this.tasksList);
  }
  remove(task: string) {
    // usuwanie przez filtrowanie
    this.tasksList = this.tasksList.filter(e => e !== task);
  }
  finish(task: string) {
    // dodawanie
    this.taskDone.push(task);
    //usuwanie z listy aktywnych
    this.remove(task);
  }
  constructor() { }

  ngOnInit() {
  }

}
