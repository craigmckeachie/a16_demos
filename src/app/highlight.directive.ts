import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighlight') color = '';

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.highlight();
  }

  highlight() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
}
