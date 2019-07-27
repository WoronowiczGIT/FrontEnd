import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tdl-todo',
  templateUrl: './tdl-todo.component.html',
  styleUrls: ['./tdl-todo.component.css']
})
export class TdlTodoComponent implements OnInit {

  @Input()
  activeTasks = [];

  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  emitRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  callRemove(task: string) {
    this.emitRemove.emit(task);
  }
  callDone(task: string) {
    this.emitDone.emit(task);
  }
}
