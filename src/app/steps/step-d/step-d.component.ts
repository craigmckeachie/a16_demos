import { Component, OnInit } from '@angular/core';
import { StepComponent } from '../step.component';

@Component({
  selector: 'app-step-d',
  template: ` <p>step-d works!</p> `,
  styles: [],
})
export class StepDComponent implements OnInit, StepComponent {
  configuration: any;
  constructor() {}

  ngOnInit(): void {}
}
