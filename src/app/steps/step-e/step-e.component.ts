import { Component, OnInit } from '@angular/core';
import { StepComponent } from '../step.component';

@Component({
  selector: 'app-step-e',
  template: ` <p>step-e works!</p> `,
  styles: [],
})
export class StepEComponent implements OnInit, StepComponent {
  configuration: any;
  constructor() {}

  ngOnInit(): void {}
}
