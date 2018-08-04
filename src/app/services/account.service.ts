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
}
