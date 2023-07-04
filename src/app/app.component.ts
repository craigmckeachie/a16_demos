import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ``,
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const observable = new Observable((subscriber) => {
      subscriber.next(Math.random());
    });

    // subscription 1
    observable.subscribe((data) => {
      console.log(data); // 0.24957144215097515 (random number)
    });

    // subscription 2
    observable.subscribe((data) => {
      console.log(data); // 0.004617340049055896 (random number)
    });
  }
}
