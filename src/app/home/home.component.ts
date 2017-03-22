import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'my-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	items: FirebaseListObservable<any[]>;

	constructor(af: AngularFire) {
		this.items = af.database.list('/agents');
	}

	ngOnInit() {
		console.log('Hello Home');
	}

}
