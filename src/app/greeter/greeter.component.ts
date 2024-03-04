import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      greeter works!
    </p>
  `,
  styles: [
  ]
})
export class GreeterComponent {

}
