import { Inject, Injectable } from '@angular/core';
import { Config, CONFIG } from './config';
@Injectable()
export class ErrorHandlerService {
  constructor(@Inject(CONFIG) config: Config) {
    console.log(`la config: ${config.key}`);
  }
}
