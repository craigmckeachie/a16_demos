import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { interval, Observer } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
      tap((x) => console.log(x)),
      map((x) => x * 10)
    );
    const subscription = observableCommingOutOfThePipe$.subscribe(observer);
  }
}
