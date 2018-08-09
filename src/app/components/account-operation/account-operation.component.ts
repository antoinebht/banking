import { Component, Input, OnInit } from '@angular/core';

import { AccountOperation } from '../../model/account-operation';

@Component({
    selector: 'app-account-operation',
    templateUrl: './account-operation.component.html',
    styleUrls: ['./account-operation.component.css']
})
export class AccountOperationComponent implements OnInit {
    
    @Input()
    operation: AccountOperation;

    constructor() { }
    
    ngOnInit() {
    }
    
}
