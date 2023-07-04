import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { interval, Observer } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `See console for output.`,
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const observable$ = interval(1000);
    const observer: Observer<number> = {
      next: (x) => console.log(x),
      complete: () => console.log('completed'),
      error: (x) => console.log(x),
    };

    const observableCommingOutOfThePipe$ = observable$.pipe(
      filter((x) => x % 2 === 0)
    );
    const subscription = observableCommingOutOfThePipe$.subscribe(observer);
  }
}
