import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p appHighlight="yellow">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
      numquam repellat quibusdam sequi aperiam, culpa, obcaecati quam
      praesentium ut soluta facere nulla corporis recusandae? Vitae perspiciatis
      autem quibusdam unde voluptatem.
    </p>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
