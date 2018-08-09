import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPeriodComponent } from './account-period.component';

describe('AccountPeriodComponent', () => {
  let component: AccountPeriodComponent;
  let fixture: ComponentFixture<AccountPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
