import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import { CONFIG } from './config';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          { provide: CONFIG, useValue: { key: 'app-demo-application'} },
          ErrorHandlerService,
      ]
    });
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
