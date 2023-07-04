import { Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: ` <p>Hello World! My name is: <ng-content></ng-content></p> `,
  styles: [],
})
export class HelloWorldComponent implements OnInit {
  @ContentChild('nameContent', { static: true }) nameContent: any;
  constructor() {}

  ngOnInit(): void {
    console.log(
      'OnInit: nameContent available only if static is true',
      this.nameContent
    );
  }

  ngAfterContentInit() {
    console.log('AfterContentInit: nameContent available. ', this.nameContent);
  }
  ngAfterViewInit() {
    console.log('AfterViewInit: nameContent available. ', this.nameContent);
  }
}
