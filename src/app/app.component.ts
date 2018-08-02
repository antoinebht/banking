import { Component } from '@angular/core';

import { AppConfigService } from './services/app-config.service';
import { LoggingService } from './services/logging.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ANTB\\\\BANK';
    
    constructor(private appConfigService: AppConfigService, private loggingService: LoggingService) {}
    
    ngOnInit() {
        this.loggingService.add("AppComponent", "Init the app");
        this.appConfigService.getTitle().subscribe(title => this.title = title);
    }
}
