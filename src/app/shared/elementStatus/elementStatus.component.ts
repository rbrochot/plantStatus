import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'my-element-status',
	templateUrl: './elementStatus.component.html',
	styleUrls: ['./elementStatus.component.scss']
})
export class ElementStatusComponent implements OnInit {
	items: FirebaseListObservable<any[]>;

	constructor(af: AngularFire) {
		this.items = af.database.list('/data', {
			query: {
				orderByChild: 'dataSourceId',
				equalTo: '1'
			}
		});
	}

	ngOnInit() {
	}

}
