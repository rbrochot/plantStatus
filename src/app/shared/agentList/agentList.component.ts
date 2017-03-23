import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'my-agent-list',
	templateUrl: './agentList.component.html',
	styleUrls: ['./agentList.component.scss']
})
export class AgentListComponent implements OnInit {
	items: FirebaseListObservable<any[]>;

	constructor(af: AngularFire) {
		this.items = af.database.list('/agents');
	}

	ngOnInit() {
	}

}
