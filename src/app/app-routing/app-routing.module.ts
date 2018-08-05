import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from '../components/account/account.component';

const routes: Routes = [
  { path: 'account/:id', component: AccountComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}