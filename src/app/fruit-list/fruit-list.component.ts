import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  template: `
    <ul>
      <li *ngFor="let fruit of fruits">
        {{ fruit }}
      </li>
    </ul>
  `,
  styles: [],
})
export class FruitListComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  fruits: string[] = [];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log('Previous Value: ', changes.fruits.previousValue);
    console.log('Current Value: ', changes.fruits.currentValue);
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnDestroy(): void {
    console.log('Destroyed');
  }
}
