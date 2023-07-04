import { OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ` <button #myButton>Click Me</button> `,
  styles: [],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('myButton') button: ElementRef | undefined = undefined;

  ngOnInit(): void {
    console.log(this.button); //undefined
  }
  ngAfterViewInit(): void {
    console.log(this.button); //ElementRef
    console.log(this.button?.nativeElement); //button
    const clickEvents$ = fromEvent<Event>(this.button?.nativeElement, 'click');
    clickEvents$.subscribe((event: Event) => console.log(event));
  }
}
