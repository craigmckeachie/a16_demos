import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ` See console for output. `,
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const observable$ = of(1, 2, 3);
    observable$.subscribe((x) => console.log(x));
  }
}
