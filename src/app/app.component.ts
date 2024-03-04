import { Component } from '@angular/core';
import { GreeterComponent } from './greeter/greeter.component';

@Component({
  selector: 'app-root',
  template: ` <app-greeter></app-greeter> `,
  styles: [],
  standalone: true,
  imports: [GreeterComponent],
})
export class AppComponent {}
