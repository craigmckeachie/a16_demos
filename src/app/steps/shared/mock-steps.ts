import { StepAComponent } from '../step-a/step-a.component';
import { StepBComponent } from '../step-b/step-b.component';
import { StepCComponent } from '../step-c/step-c.component';
import { Step } from './step.model';

export const MOCK_STEPS: Step[] = [
  new Step(
    1,
    'Step A',
    'Here is what you need to do to complete Step A.',
    StepAComponent,
    { radius: 7, opacity: 30 }
  ),
  new Step(
    2,
    'Step B',
    'Here is what you need to do to complete Step A.',
    StepBComponent,
    { axis: 7, type: 'random' }
  ),
  new Step(
    3,
    'Step C',
    'Here is what you need to do to complete Step C.',
    StepCComponent,
    { x: 50, y: 33 }
  ),
];
