import { Component, OnInit } from '@angular/core';

import { AppConfigService } from '../services/app-config.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
    constructor(private appConfigService: AppConfigService) { }
    
    ngOnInit() {
    }
    
}
