import { Component, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <input
      type="text"
      #term
      (input)="search(term.value)"
      placeholder="search"
    />
    <br />
    <p *ngFor="let message of messages">{{ message }}</p>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  messages: string[] = [];
  private searchTermStream$ = new Subject<string>();

  ngOnInit(): void {
    this.searchTermStream$
      .pipe
      // debounceTime(1000),
      // distinctUntilChanged(),
      // switchMap((term: string) => {
      //   return of(`new observable: ${term}`);
      // })
      ()
      .subscribe((term) => this.messages.push(`http call for: ${term}`));
  }

  search(term: string) {
    this.searchTermStream$.next(term);
  }
}
