import { Component, Input, OnInit } from '@angular/core';

import { AccountPeriod } from '../../model/account-period';

@Component({
  selector: 'app-account-period',
  templateUrl: './account-period.component.html',
  styleUrls: ['./account-period.component.css']
})
export class AccountPeriodComponent implements OnInit {

  @Input()
  period: AccountPeriod;

  constructor() { }

  ngOnInit() {
  }

  addOperation(): void {
    this.period.operations.push({ date: '2018-06-31', amount: -6.0, type: 'COURSES', comment:'', checked: false })
  }
}
