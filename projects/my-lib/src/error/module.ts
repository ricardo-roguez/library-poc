import { ModuleWithProviders, NgModule } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { Config, CONFIG } from './config';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
})
export class ErrorModule {
    static forRoot(config?: Config): ModuleWithProviders<ErrorModule> {
        return {
            ngModule: ErrorModule,
            providers: [
                ErrorHandlerService,
                { provide: CONFIG, useValue: config }
            ]
        }
    }
}