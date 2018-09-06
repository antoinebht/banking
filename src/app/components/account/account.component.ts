import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AccountService } from '../../services/account.service';
import { BankAccount } from '../../model/bank-account';
import { AccountPeriod } from '../../model/account-period';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    
    account: BankAccount;

    constructor(private route: ActivatedRoute, private router: Router, private accountService: AccountService) { 
    }
    
    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
              this.accountService.getAccount(parseInt(params.get('id')))
            )
        ).subscribe(account => {this.account= account; console.log(account)});
    }

    getBankAmount(): number {
         return this.getAccountBankAmount(this.account, false);
    }

    getRealAmount(): number {
         return this.getAccountBankAmount(this.account, true);
    }

    private getAccountBankAmount(account: BankAccount, real: boolean): number {
        var res:number = 0.0;
        for (var index = 0; index < account.periods.length; index++) {
            var element = account.periods[index];
            res+=this.getPeriodAmount(element, real);
        }
        return res;
    }
    
    private getPeriodAmount(period: AccountPeriod, real: boolean) : number {
        var res:number = 0.0;
        for (var index = 0; index < period.operations.length; index++) {
            var element = period.operations[index];
            if (real || (!real && element.checked)) {
                res+=element.amount;
            }   
        }
        return res;
    }
    
}
