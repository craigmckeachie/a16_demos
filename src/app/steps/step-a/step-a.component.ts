import { Component, OnInit } from '@angular/core';
import { StepComponent } from '../step.component';

@Component({
  selector: 'app-step-a',
  template: ` <p>step-a works!</p>
    <p>{{ configuration.radius }}</p>
    <p>{{ configuration.opacity }}</p>`,
  styles: [],
})
export class StepAComponent implements OnInit, StepComponent {
  configuration: any;
  constructor() {}

  ngOnInit(): void {}
}
