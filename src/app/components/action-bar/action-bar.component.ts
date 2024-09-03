import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})
export class ActionBarComponent implements OnInit {
  title = 'action-bar';
  count = 0;
  step = 1;

  constructor(

  ) { }

  ngOnInit() {

  }


}
