import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogConsoleComponent } from './components/log-console/log-console.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogConsoleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
