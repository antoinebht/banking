import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogConsoleComponent } from './components/log-console/log-console.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AccountComponent } from './components/account/account.component';
import { AccountPeriodComponent } from './components/account-period/account-period.component';
import { AccountOperationComponent } from './components/account-operation/account-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogConsoleComponent,
    AccountComponent,
    AccountPeriodComponent,
    AccountOperationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
