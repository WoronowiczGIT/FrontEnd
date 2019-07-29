import { Component, OnInit } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-klikacz',
  templateUrl: './klikacz.component.html',
  styleUrls: ['./klikacz.component.css']
})
export class KlikaczComponent implements OnInit {

  allClicks: number;

  constructor(private cService: ClickService) { }

  ngOnInit(): void {
    // subskrybujac element nasłuchujemy jego zmian
    this.cService.getSum().subscribe(value => {
      this.allClicks = value;
    });
  }

}
