import { Injectable } from '@angular/core';

import { Log } from '../model/log';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logs: Log[] = [];
  
  add(fr: string, msg: string) {
    this.logs.push({
      from: fr,
      content: msg,
      date: Date.now()
    });
  }
}
