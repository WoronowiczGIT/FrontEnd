import { Component, OnInit } from '@angular/core';
import { ClickService } from '../../services/click.service';

@Component({
  selector: 'app-klikacz2',
  templateUrl: './klikacz2.component.html',
  styleUrls: ['./klikacz2.component.css'],
  // providers: [ClickService]
})
export class Klikacz2Component implements OnInit {

  click = 0;
  constructor(private sameService: ClickService) { }


  ngOnInit() {
  }
  add() {

    this.click++;
    this.sameService.addClicks();
  }
}
