import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})
export class ActionBarComponent implements OnInit {
  title = 'action-bar';
  counter: number = 0;

  @Input() step: number = 1;
  @Output() numberChange = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  decrease() {
    if (this.counter > 0) {
      this.counter = this.counter - this.step;
      this.numberChange.emit(this.counter);
    }
  }

  increase() {
    if (this.counter < 10) {
      this.counter = this.counter + this.step;
      this.numberChange.emit(this.counter);
    }
  }


}
