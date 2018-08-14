import { Component, OnInit } from '@angular/core';

import { AppConfigService } from '../../services/app-config.service';
import { AccountService } from '../../services/account.service';

import  { BankAccount } from '../../model/bank-account';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
    title: string;
    version: string;
    accounts: BankAccount[];

    constructor(private appConfigService: AppConfigService, private accountService: AccountService) { }
    
    ngOnInit() {
        this.appConfigService.getTitle().subscribe(title => this.title = title);
        this.appConfigService.getVersion().subscribe(version => this.version = version);
        this.accountService.getAccounts().subscribe(accounts => this.accounts = accounts);
    }
    
}
