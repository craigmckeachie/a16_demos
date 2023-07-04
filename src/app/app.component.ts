import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="example-boundary">
      <div class="example-box" cdkDragBoundary=".example-boundary" cdkDrag>
        Drag me around
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {}
