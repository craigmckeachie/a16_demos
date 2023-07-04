import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-tool-list></app-tool-list> `,
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
