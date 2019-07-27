import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdlv2',
  templateUrl: './tdlv2.component.html',
  styleUrls: ['./tdlv2.component.css']
})
export class TDLv2Component implements OnInit {

  newTask: string;
  tasksList: Array<string> = [];
  taskDone: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  add(task: string) {
    this.tasksList.push(task);
  }

  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }
}
