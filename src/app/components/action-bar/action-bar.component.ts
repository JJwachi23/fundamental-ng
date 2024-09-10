import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})
export class ActionBarComponent implements OnInit {
  title = 'action-bar';
  @Input() step: number = 1;

  @Output() counterChange = new EventEmitter();
  @Input() counter: number = 1;

  constructor() { }

  ngOnInit() {

  }

  decrease() {
    if (this.counter > 0) {
      this.counter = this.counter - this.step;
      // console.log(this.counter);
      this.counterChange.emit(this.counter);
    }
  }

  increase() {
    if (this.counter < 250) {
      this.counter = this.counter + this.step;
      this.counterChange.emit(this.counter);
    }
  }

}
