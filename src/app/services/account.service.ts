import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BankAccount, BankAccountItem } from '../model/bank-account';
import { AccountOperation } from '../model/account-operation';
import { ACCOUNTS } from '../mock/accounts';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    
    constructor(private http: HttpClient) { }
    
    private accountsUrl = 'http://localhost:8000/bank/accounts';
    
    
    getAccounts() : Observable<BankAccountItem[]> {
        return this.http.get<BankAccountItem[]>(this.accountsUrl);
    }
    
    getAccount(id: number) : Observable<BankAccount> {
        return this.http.get<BankAccount>(this.accountsUrl+'/1').pipe(
            catchError(this.handleError('getHeroes', new BankAccount()))
        );
    } 
    
    addOperation(accountid: number, periodid: number, operations: AccountOperation) {
        var url = `${this.accountsUrl}/${accountid}/periods/${periodid}/operations`
        return this.http.post<AccountOperation>(url, operations, httpOptions);
    }
    
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
