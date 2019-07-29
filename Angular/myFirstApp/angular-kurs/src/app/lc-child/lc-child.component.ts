import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lc-child',
  templateUrl: './lc-child.component.html',
  styleUrls: ['./lc-child.component.css']
})
export class LCChildComponent implements OnInit {

  @Input()
  inputText: string;

  show = true;
  content() {
    this.show = !this.show;
  }
  constructor() { }
  ngOnInit() {
  }

}
