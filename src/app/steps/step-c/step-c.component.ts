import { Component, OnInit } from '@angular/core';
import { StepComponent } from '../step.component';

@Component({
  selector: 'app-step-c',
  template: ` <p>step-c works!</p> `,
  styles: [],
})
export class StepCComponent implements OnInit, StepComponent {
  configuration: any;
  constructor() {}

  ngOnInit(): void {}
}
