import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  inputText = 'to pole ma maks 5 znakow';
  inputTwoWay = '';
  showClick = '';
  isbuttON = true;

  CSScolorClass = 'color';
  logoUrl = '';
  maxLength = 5;
  callClick() {
    this.showClick = 'event zarejestrowany';
    this.isbuttON = false;
  }

  constructor() {
    setTimeout(() => { this.isbuttON = false; }, 3000);
  }
  change() {
    this.maxLength = 10;
    this.inputText = ' to pole ma maks ' + this.maxLength + ' znakow ';
    this.CSScolorClass = 'color2';
    this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  ngOnInit() {
  }

}
