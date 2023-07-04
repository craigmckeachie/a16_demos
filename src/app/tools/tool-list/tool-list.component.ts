import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Step } from 'src/app/steps/shared/step.model';
import { StepAComponent } from 'src/app/steps/step-a/step-a.component';
import { StepComponent } from 'src/app/steps/step.component';
import { StepDirective } from 'src/app/steps/step.directive';
import { Tool } from '../shared/tool.model';
import { ToolService } from '../shared/tool.service';

@Component({
  selector: 'app-tool-list',
  template: `
    <ul *ngIf="tools$ | async as tools">
      <li *ngFor="let tool of tools">
        <h3>{{ tool.name }}</h3>
        <p>{{ tool.description }}</p>
        <button *ngFor="let step of tool.steps" (click)="onStepClick(step)">
          {{ step.name }}
        </button>
      </li>
    </ul>
    <ng-template stepHost></ng-template>
  `,
  styles: [],
})
export class ToolListComponent implements OnInit {
  tools$: Observable<Tool[]> = new Observable();
  @ViewChild(StepDirective, { static: true }) stepHost!: StepDirective;

  constructor(
    private toolService: ToolService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.tools$ = this.toolService.getAll();
  }

  onStepClick(step: Step) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(step.component);
    const viewContainerRef = this.stepHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef =
      viewContainerRef.createComponent<StepComponent>(componentFactory);
    componentRef.instance.configuration = step.configuration;
  }
}
