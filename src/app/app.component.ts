import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-my-counter></app-my-counter> `,
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
