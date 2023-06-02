import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import { CardModule } from "my-lib/card";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CardModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
