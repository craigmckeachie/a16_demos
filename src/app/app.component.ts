import { OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: ` <button #myButton>Click Me</button> `,
  styles: [],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('myButton') button: ElementRef | undefined = undefined;

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    fromEvent<Event>(this.button?.nativeElement, 'click')
      .pipe(
        //restart the counter on every click
        switchMap(() => interval(1000))
      )
      .subscribe((x) => console.log(x));
  }
}
