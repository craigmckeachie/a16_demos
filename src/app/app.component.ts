import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form #signinForm="ngForm" (submit)="onSubmit(signinForm)">
      <input type="text" ngModel name="username" placeholder="username" /><br />
      <input type="text" ngModel name="password" placeholder="password" /><br />
      <button>Sign In</button>
    </form>
    <pre>
      {{ signinForm.value | json }}
    </pre
    >
  `,
  styles: []
})
export class AppComponent {
  onSubmit(form) {
    console.log(form.value);
  }
}
