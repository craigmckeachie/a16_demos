import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ``,
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const subject = new Subject();

    // subscription 1
    subject.subscribe((data) => {
      console.log(data); // 0.24957144215097515 (random number)
    });

    // subscription 2
    subject.subscribe((data) => {
      console.log(data); // 0.24957144215097515(same random number)
    });

    subject.next(Math.random());
  }
}
