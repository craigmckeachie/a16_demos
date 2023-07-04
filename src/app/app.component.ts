import { OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ` <input type="text" #myInput /> `,
  styles: [],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') input: ElementRef | undefined = undefined;

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const inputChangeEvents$ = fromEvent<InputEvent>(
      this.input?.nativeElement,
      'input'
    ).subscribe((event: InputEvent) => console.log(event));
  }
}
