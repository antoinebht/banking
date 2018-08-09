import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../services/account.service';
import { BankAccount } from '../../model/bank-account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: BankAccount;

  constructor(private accountService: AccountService) { 

  }

  ngOnInit() {
    this.accountService.getAccount(1).subscribe(account => {
      this.account = account
      console.log(account);
    } );
  }

}
