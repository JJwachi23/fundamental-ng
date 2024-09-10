import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-flex',
  templateUrl: './square-flex.component.html',
  styleUrl: './square-flex.component.css'
})
export class SquareFlexComponent {

  @Input() divWidth = 200;
  @Input() divHight = 200;

}
