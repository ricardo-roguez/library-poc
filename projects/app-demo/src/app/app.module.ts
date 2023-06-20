import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'my-lib/card';
import { ErrorModule, Config, ErrorHandlerService } from 'my-lib/error';


const config: Config = {
  key: 'app-demo-application'
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
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
    }
  ]
})
export class AppModule { }
