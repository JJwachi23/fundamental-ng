import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'fundamental-ng';
  value = 0;

  appMinLabel = 'myAppMinLabel';
  appMaxLabel = 'myAppMaxLabel';

  squareWidth = 250;
  squareHight = 100;

  constructor() { }

  ngOnInit() {

  }

  calculate(value: string) {
    const price = Number(value);
    this.value = (price * 3) / 4;
  }

  testClick() {
    console.log('test event binding');
  }

  testNumberChange(value: any) {
    console.log('test number changed: ', value);
  }

  doAppMinChange(value: any) {
    console.log('test min change ', value);
  }

  doAppMaxChange(value: any) {
    console.log('test max change ', value);
  }
}
