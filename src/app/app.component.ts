import { Component } from '@angular/core';

import { ApiService } from './shared';
import { AngularFire } from 'angularfire2';

import '../style/app.scss';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	url = 'https://github.com/preboot/angular2-webpack';
	title: string;

	constructor(private api: ApiService, public af: AngularFire) {
		this.title = this.api.title;
	}

	login () {
		this.af.auth.login();
	}
	logout () {
		this.af.auth.logout();
	}
}
