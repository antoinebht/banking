import { Component, OnInit } from '@angular/core';

import { AppConfigService } from '../../services/app-config.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
    title: string;

    version: string;

    constructor(private appConfigService: AppConfigService) { }
    
    ngOnInit() {
        this.appConfigService.getTitle().subscribe(title => this.title = title);
        this.appConfigService.getVersion().subscribe(version => this.version = version);
    }
    
}
