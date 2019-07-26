import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  inputText = 'Some starting text';
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
    this.inputText = ' Inny text inny Kolor';
    this.CSScolorClass = 'color2';
    this.maxLength = 10;
    this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  ngOnInit() {
  }

}
