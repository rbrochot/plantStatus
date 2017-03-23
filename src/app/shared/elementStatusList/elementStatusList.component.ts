import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'my-element-status-list',
	templateUrl: './elementStatusList.component.html',
	styleUrls: ['./elementStatusList.component.scss']
})
export class ElementStatusListComponent implements OnInit {
	items: FirebaseListObservable<any[]>;

	constructor(af: AngularFire) {
		this.items = af.database.list('/dataSources');
	}

	ngOnInit() {
	}

}
