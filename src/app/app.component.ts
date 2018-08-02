import { Component } from '@angular/core';

import { AppConfigService } from './services/app-config.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ANTB\\\\BANK';
    
    constructor(private appConfigService: AppConfigService) {}
    
    ngOnInit() {
        this.appConfigService.getTitle().subscribe(title => this.title = title);
    }
}
