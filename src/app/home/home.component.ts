import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
	selector: 'my-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private af: AngularFire, private router: Router) {
	}

	ngOnInit() {
		this.af.auth.subscribe(auth => {
			if (auth != null) {
				this.router.navigate(['/dashboard']);
			}
		});
	}
}
