import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() zadaniaDziecka = ['Sprzatanie kuwety', 'robienie na drutach', 'nauka angulara'];
  //przyklad uzycia aliasu - jezeli zdecydujemy sie na zmiane
  //musimy poslugiwac sie od ej pory aliasem
  //ogolnie nie jest to dobra praktyka
  @Input('emptySlot')
  pusteZadania;
  constructor() { }

  @Output()
  myEventHandler = new EventEmitter<string>();
  ngOnInit() {
  }
  handle(someEvent) {
    this.myEventHandler.emit(someEvent);
  }

}
