import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  constructor() { }
  zadaniaRodzica = ['gotowanie', 'sprzatanie', 'placenie'];

  ngOnInit() {
  }
  select(someEvent): void {
    console.log(someEvent);
  }
}