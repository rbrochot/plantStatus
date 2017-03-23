import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'my-element-status-list',
	templateUrl: './elementStatusList.component.html',
	styleUrls: ['./elementStatusList.component.scss']
})
export class ElementStatusListComponent implements OnInit {
	dataSources: FirebaseListObservable<any[]>;

	constructor(af: AngularFire) {
		this.dataSources = af.database.list('/dataSources');
	}

	ngOnInit() {
	}

}
