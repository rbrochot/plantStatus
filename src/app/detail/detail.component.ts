import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
		console.log('Hello Detail');
	}

}
