import { Component, OnInit } from '@angular/core';
import { StepComponent } from '../step.component';

@Component({
  selector: 'app-step-b',
  template: `
    <p>step-b works!</p>
    <div>{{ configuration.type }}</div>
  `,
  styles: [],
})
export class StepBComponent implements OnInit, StepComponent {
  configuration: any;
  constructor() {}

  ngOnInit(): void {}
}
