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

}
