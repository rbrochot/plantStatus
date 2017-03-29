import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'my-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
	dataSourceId: String;

	constructor(
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => params['id'])
			.subscribe(id => this.dataSourceId = id.toString());
			// .subscribe(hero => this.hero = hero);
	}

}
