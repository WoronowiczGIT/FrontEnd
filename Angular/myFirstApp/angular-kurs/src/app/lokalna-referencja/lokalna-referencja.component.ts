import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-lokalna-referencja',
  templateUrl: './lokalna-referencja.component.html',
  styleUrls: ['./lokalna-referencja.component.css']
})
export class LokalnaReferencjaComponent implements OnInit {

  @ViewChild('childRef', { static: false })
  myChildComponent: ChildComponent;

  //wyciagamy element html na podstawie aliasu
  @ViewChild('inputText', { static: false })
  myInput: ElementRef;


  constructor() { }
  ngOnInit() {
  }
  // z poziomu html przekazujemy element do komponentu
  add(input: HTMLInputElement) {
    console.log(input.value);
    console.log('ilosc zadan dziecka: ' + this.myChildComponent.zadaniaDziecka.length);
    // kasuje tekst z inputa
    this.myInput.nativeElement.value = '';
  }
}
