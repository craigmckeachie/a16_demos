import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-fruit-list [fruits]="data" *ngIf="showList"></app-fruit-list>
    <button (click)="onClickChange()">Change List</button>
    <button (click)="onClickRemove()">Show/Remove List</button>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  data = ['Apple', 'Orange', 'Plum'];
  showList = true;

  ngOnInit(): void {}

  onClickChange() {
    this.data = ['Banana', 'Kiwi', 'Grape'];
  }

  onClickRemove() {
    this.showList = !this.showList;
  }
}
