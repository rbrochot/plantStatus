import { DataSource } from '../models/dataSource.model';
import { DataValue } from '../models/dataValue.model';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'my-element-status',
	templateUrl: './elementStatus.component.html',
	styleUrls: ['./elementStatus.component.scss']
})
export class ElementStatusComponent implements OnInit {
	@Input()
	dataSource: DataSource;

	af: AngularFire;
	dataPoints: FirebaseListObservable<any[]>;
	statusColorClass: String;
	lastDataPoint: DataValue;

	constructor(af: AngularFire) {
		this.af = af;
		this.statusColorClass = 'grey-text';
	}

	ngOnInit() {
		this.dataPoints = this.af.database.list('/data', {
			query: {
				// equalTo: {value: this.dataSource.$key, key: 'dataSourceId'},
				// orderByChild: 'dateTime'
				equalTo: this.dataSource.$key,
				orderByChild: 'dataSourceId'
			}
		});

		this.dataPoints.subscribe(data => {
			if (data.length === 0) {
				this.statusColorClass = 'grey-text';
				return;
			}
			this.lastDataPoint = data[data.length - 1];
			if (this.lastDataPoint.value > this.dataSource.minValue && this.lastDataPoint.value < this.dataSource.maxValue) {
				this.statusColorClass = 'green-text';
			} else {
				// TODO Add warn values
				this.statusColorClass = 'red-text';
			}
		});
	}

}
