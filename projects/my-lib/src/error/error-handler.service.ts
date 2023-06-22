import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { Config, CONFIG } from './config';
import { HttpErrorResponse } from '@angular/common/http';
import { TraceErrorModel } from './trace-error.model';
@Injectable()
export class ErrorHandlerService extends ErrorHandler {
  private config: Config;
  constructor(@Inject(CONFIG) config: Config) {
    super();
    this.config = config;
    console.log(`la config: ${config.key}`);
  }

  override handleError(error: Error | HttpErrorResponse): void {
    const traceErrorModel: TraceErrorModel = new TraceErrorModel().setSummary(error.message).setApplication(this.config.key);

    if (error instanceof Error && error.stack) {
      traceErrorModel.setDetail(error.stack);
    }

    if (error instanceof HttpErrorResponse) {
      traceErrorModel.setDetail(`${error.status} - ${error.statusText}`);
    }

    console.log('El error a mandar al back:', traceErrorModel)

    super.handleError(error);
  }
}
