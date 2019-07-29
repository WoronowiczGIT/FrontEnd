import { Component, OnInit } from '@angular/core';
import { ClickService } from '../../services/click.service';

@Component({
  selector: 'app-klikacz1',
  templateUrl: './klikacz1.component.html',
  styleUrls: ['./klikacz1.component.css'],
  // providers: [ClickService]
})
export class Klikacz1Component implements OnInit {
  click = 0;
  constructor(private myService: ClickService) { }

  ngOnInit() {
  }
  add() {
    this.click++;
    this.myService.addClicks();
  }
}
