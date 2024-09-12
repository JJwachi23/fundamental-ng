import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'fundamental-ng';
  value = 0;
  @Input() counter = 1;

  appMinLabel = 'myAppMinLabel';
  appMaxLabel = 'myAppMaxLabel';

  squareWidth = 250;
  squareHight = 100;

  appCounterWidth = 10;

  activate: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  calculate(value: string) {
    const price = Number(value);
    this.value = (price * 3) / 4;
  }

  testClick(value: any) {
    console.log('test', value);
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
