import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
    
    constructor() { }
    
    getTitle(): string {
        return "> antb.bank()";
    }

    getVersion(): string {
        return "v0.1";
    }
}
