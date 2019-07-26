import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  isDisabled = true;
  inputText = 'some text';
  myColor = 'cssColor1';



  constructor() { }

  ngOnInit() {
  }
  onFocus() {
    this.myColor = 'cssColor2';
  }
  onClick(event) {
    console.log(event);
  }
  onMouseMoved(event) {
    console.log('x: ' + event.clientX + '| y: ' + event.clientY);
  }
  onPaste() {
    this.inputText = 'do not paste content!';
  }
  change() {
    this.isDisabled = false;
  }
}
