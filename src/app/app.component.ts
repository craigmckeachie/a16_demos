import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  template: `
    <app-hello-world><h2 #nameContent>Bond, James Bond</h2> </app-hello-world>
    <app-fruit-list [fruits]="data" *ngIf="showList"></app-fruit-list>
    <button (click)="onClickChange()">Change List</button>
    <button (click)="onClickRemove()">Show/Remove List</button>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  @ViewChild(HelloWorldComponent, { static: true })
  helloWorldComponent!: HelloWorldComponent;
  @ViewChild(FruitListComponent, { static: false })
  fruitListComponent!: FruitListComponent;
  data = ['Apple', 'Orange', 'Plum'];
  showList = true;

  ngOnInit(): void {
    console.log('App OnInit: ');
    console.log('ViewChild (hello):', this.helloWorldComponent);
    console.log('ViewChild: (fruit list)', this.fruitListComponent);
  }

  ngAfterViewInit(): void {
    console.log('App AfterViewInit: ');
    console.log('ViewChild (hello):', this.helloWorldComponent);
    console.log('ViewChild: (fruit list)', this.fruitListComponent);
  }

  onClickChange() {
    this.data = ['Banana', 'Kiwi', 'Grape'];
  }

  onClickRemove() {
    this.showList = !this.showList;
  }
}
