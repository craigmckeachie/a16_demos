import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="!isSignedIn">
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button (click)="signIn()">Sign In</button>
    </div>
    <div *ngIf="isSignedIn">Welcome back friend.</div>
  `,
  styles: []
})
export class AppComponent {
  isSignedIn = false;
  signIn() {
    this.isSignedIn = true;
  }
}
