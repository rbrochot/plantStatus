import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'my-element-status',
	templateUrl: './elementStatus.component.html',
	styleUrls: ['./elementStatus.component.scss']
})
export class ElementStatusComponent implements OnInit {
	@Input()
	dataSourceId: String;

	dataPoints: FirebaseListObservable<any[]>;
	af: AngularFire;

	constructor(af: AngularFire) {
		this.af = af;
	}

	ngOnInit() {
		this.dataPoints = this.af.database.list('/data', {
			query: {
				orderByChild: 'dataSourceId',
				equalTo: this.dataSourceId
			}
		});
	}

}
