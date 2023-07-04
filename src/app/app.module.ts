import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
