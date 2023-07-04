import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsModule } from './tools/tools.module';
import { StepsModule } from './steps/steps.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolsModule,
    StepsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
