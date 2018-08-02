import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
    
    constructor() { }
    
    getTitle(): Observable<string> {
        return of("> antb.bank()");
    }

    getVersion(): Observable<string> {
        return of("v0.1");
    }
}
