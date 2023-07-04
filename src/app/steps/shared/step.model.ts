import { Type } from "@angular/core";

export class Step {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public component: Type<any>,
    public configuration: any
  ) {}
}
