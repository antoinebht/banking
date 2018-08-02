import { Component, OnInit } from '@angular/core';

import { LoggingService } from '../../services/logging.service';

@Component({
	selector: 'app-log-console',
	templateUrl: './log-console.component.html',
	styleUrls: ['./log-console.component.css']
})
export class LogConsoleComponent implements OnInit {
	
	contentHidden: Boolean = true;
	
	constructor(private loggingService: LoggingService) { }
	
	ngOnInit() {
	}
	
	display(): void {
		this.contentHidden = !this.contentHidden;
		console.log("click "+this.contentHidden);
	} 
}
