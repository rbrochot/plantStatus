import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
		console.log('Hello Overview');
	}

}
