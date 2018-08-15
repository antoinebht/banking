import { AccountPeriod } from './account-period';


export class BankAccount {
    id: number;
    name: string;
    periods: AccountPeriod[];
    tagColors: Object;
}