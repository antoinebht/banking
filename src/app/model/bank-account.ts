import { AccountPeriod } from './account-period';


export class BankAccount {
    id: number = -1;
    name: string = "undefined";
    periods: AccountPeriod[] = [];
}

export class BankAccountItem {
    id: number;
    name: string;
}