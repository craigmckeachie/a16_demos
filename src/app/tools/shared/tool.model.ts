import { Step } from 'src/app/steps/shared/step.model';

export class Tool {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public steps: Step[]
  ) {}
}
