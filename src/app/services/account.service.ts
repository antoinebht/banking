import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BankAccount } from '../model/bank-account';
import { ACCOUNTS } from '../mock/accounts';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccounts() : Observable<BankAccount[]> {
    return of(ACCOUNTS);
  }

  getAccount(id: number) : Observable<BankAccount> {
    for (var account in ACCOUNTS) {
      if (ACCOUNTS.hasOwnProperty(account)) {
        var element = ACCOUNTS[account];
        if (element.id === id) {
          return of(element);
        }
      }
    }
    return of(undefined);
  } 
}
