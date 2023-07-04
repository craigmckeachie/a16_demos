import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form #signinForm="ngForm" (submit)="onSubmit(signinForm)">
      <input
        type="text"
        placeholder="username"
        ngModel
        #username="ngModel"
        name="username"
        required
        minlength="3"
      /><br />
      <pre>
        {{ username.errors | json }}
      </pre
      >
      <br />
      Dirty: {{ username.dirty | json }} <br />
      Touched: {{ username.touched | json }} <br />
      <input type="text" ngModel name="password" placeholder="password" /><br />
      <button>Sign In</button>
    </form>
  `,
  styles: []
})
export class AppComponent {
  onSubmit(form) {
    console.log(form.value);
  }
}
