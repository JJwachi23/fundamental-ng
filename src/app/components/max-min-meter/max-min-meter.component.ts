import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrl: './max-min-meter.component.css'
})
export class MaxMinMeterComponent implements OnInit {
  @Input() minLabel = 'minLabel';
  @Input() maxLabel = 'maxLabel';

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  doMinChange(value: any) {
    this.minChange.emit(value);
  }

  doMaxChange(value: any) {
    this.maxChange.emit(value);
  }

}
