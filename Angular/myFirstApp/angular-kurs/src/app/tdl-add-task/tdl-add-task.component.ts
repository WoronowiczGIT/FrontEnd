import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tdl-add-task',
  templateUrl: './tdl-add-task.component.html',
  styleUrls: ['./tdl-add-task.component.css']
})
export class TDLAddTaskComponent implements OnInit {

  newTask: string;
  @Output()
  emitTask = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  //emituje event i czysci pole tekstowe
  emitAdd() {
    this.emitTask.emit(this.newTask);
    this.newTask = '';
  }
}
