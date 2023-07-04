import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolListComponent } from './tool-list/tool-list.component';
import { StepsModule } from '../steps/steps.module';

@NgModule({
  declarations: [ToolListComponent],
  imports: [CommonModule, StepsModule],
  exports: [ToolListComponent],
})
export class ToolsModule {}
