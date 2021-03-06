import { Component, Input, OnInit } from '@angular/core';

import { AccountPeriod } from '../../model/account-period';
import { AccountOperation } from '../../model/account-operation';
import { AccountService } from '../../services/account.service';

@Component({
    selector: 'app-account-period',
    templateUrl: './account-period.component.html',
    styleUrls: ['./account-period.component.css']
})
export class AccountPeriodComponent implements OnInit {
    
    @Input()
    period: AccountPeriod;
    
    @Input()
    accountId: number;

    @Input()
    tagColors: Object;
    
    collapse: boolean = true;
    
    constructor( private accountService: AccountService) { }
    
    ngOnInit() {
        this.period.operations.reverse();
    }
    
    getTagColor(tag: string): string {
        return this.tagColors[tag] || "badge-light" ;
    }
    
    addTag(operation: AccountOperation, value: string): void {
        operation.tags.push({id:-1, name: value, color:'badge-warning'});
        this.onChange(operation);
    }
    
    removeTag(operation: AccountOperation, value: string): void {
        var index: number = -1;
        for (var i = 0; i < operation.tags.length; i++) {
            var tag = operation.tags[i];
            if (tag.name === value) {
                index = i;
            }
        }
        if (index !== -1) {
            operation.tags.splice(index, 1);
            this.onChange(operation);
        }  
    }
    
    addOperation(): void {
        this.accountService.addOperation(this.accountId, this.period.id, { date: new Date().toISOString().slice(0,10), amount: 0.0, tags: [], checked: false } as AccountOperation)
        .subscribe(operation => {
            console.log(operation)
            this.period.operations.unshift(operation)
        });
    }
    
    deleteOperation(operation: AccountOperation): void {
        const index: number = this.period.operations.indexOf(operation);
        if (index !== -1) {
            this.accountService.deleteOperation(this.accountId, this.period.id,operation).subscribe(arg =>
                this.period.operations.splice(index, 1)
            );
        }  
    }
    
    toogleCollapse(): void {
        this.collapse = !this.collapse;
    }
    
    onChange(operation: AccountOperation) {
        this.accountService.putOperation(this.accountId, this.period.id,operation).subscribe();
    }
}
