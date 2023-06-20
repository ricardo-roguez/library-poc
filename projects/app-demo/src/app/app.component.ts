import { Component } from '@angular/core';
// @ts-ignore
import { ErrorHandlerService } from 'my-lib/error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private errorService: ErrorHandlerService) {}

}
