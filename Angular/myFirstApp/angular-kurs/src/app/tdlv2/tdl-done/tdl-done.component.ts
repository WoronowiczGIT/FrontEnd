import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tdl-done',
  templateUrl: './tdl-done.component.html',
  styleUrls: ['./tdl-done.component.css']
})
export class TdlDoneComponent implements OnInit {

  @Input()
  doneList: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }

}
