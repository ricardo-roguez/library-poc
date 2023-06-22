import { TraceErrorInterface } from './trace-error.interface';

export class TraceErrorModel {
    private _summary?: string;
    private _detail: string;
    private _application: string;
    

    get summary(): string | undefined{
        return this._summary;
    }

    set summary(value: string | undefined) {
        this._summary = value;
    }

    get detail(): string {
        return this._detail;
    }

    set detail(value: string) {
        this._detail = value;
    }

    get application(): string {
        return this._application;
    }

    set application(value: string) {
        this._application = value;
    }

    setDetail(value: string) {
        this._detail = value;
        return this;
    }
        
    setSummary(value?: string) {
        this._summary = value;
        return this;
    }
    
    setApplication(value: string) {
        this._application = value;
        return this;
    }
    toObject(): TraceErrorInterface {
        return {
            Summary: this.summary,
            Detail: this.detail,
            Application: this.application
        }
    }
}