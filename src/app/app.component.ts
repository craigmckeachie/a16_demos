import { Component } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  template: `
    <cdk-virtual-scroll-viewport itemSize="50" class="list">
      <div *cdkVirtualFor="let item of items" class="list-item">
        {{ item }}
      </div>
    </cdk-virtual-scroll-viewport>
  `,
  styles: [
    `
      .list {
        height: 200px;
        width: 200px;
        border: 1px solid black;
      }

      .list-item {
        height: 50px;
      }
    `
  ]
})
export class AppComponent {
  items = Array.from({ length: 100000 }).map(() => `${faker.name.findName()}`);
}
