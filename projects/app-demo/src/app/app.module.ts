import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'my-lib/card';
import { ErrorModule, Config, ErrorHandlerService } from 'my-lib/error';



const config: Config = {
  key: 'qué pasa Xavi'
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CardModule,
    BrowserModule,
    AppRoutingModule,
    ErrorModule.forRoot(config)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
