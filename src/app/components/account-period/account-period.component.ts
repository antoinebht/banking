import { Component, Input, OnInit } from '@angular/core';

import { AccountPeriod } from '../../model/account-period';
import { AccountOperation } from '../../model/account-operation';

@Component({
  selector: 'app-account-period',
  templateUrl: './account-period.component.html',
  styleUrls: ['./account-period.component.css']
})
export class AccountPeriodComponent implements OnInit {

  @Input()
  period: AccountPeriod;

  collapse: boolean = true;
  constructor() { }

  ngOnInit() {
    this.period.operations.reverse()
  }

  addOperation(): void {
    this.period.operations.unshift({ date: '2018-06-31', amount: -6.0, type: 'COURSES', comment:'', checked: false })
  }

  deleteOperation(operation: AccountOperation): void {
    console.log("test");
    const index: number = this.period.operations.indexOf(operation);
    if (index !== -1) {
      this.period.operations.splice(index, 1);
    }  
  }

  toogleCollapse(): void {
    this.collapse = !this.collapse;
  }
}
