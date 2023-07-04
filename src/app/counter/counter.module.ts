import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [MyCounterComponent],
  imports: [CommonModule],
  exports: [MyCounterComponent],
})
export class CounterModule {}
