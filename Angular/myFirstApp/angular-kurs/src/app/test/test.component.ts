import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  // styleUrls: ['./test.component.css']
  template: `<p>TS bitches</p>`,
  styles: [`p{font-size: 32px; color: blue;}`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
