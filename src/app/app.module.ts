import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule,Response} from '@angular/http';

import { AppComponent } from './app.component';
import { EmployComponent } from './employ/employ.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
