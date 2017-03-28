import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Injectable()
export class LoginGuard implements CanActivate {
	currentAuth: Object;

	constructor(private af: AngularFire, private router: Router) {
		this.af.auth.subscribe(auth => this.currentAuth = auth);
	}

	canActivate() {
		if (this.currentAuth != null) {
			return true;
		} else {
			this.router.navigate(['']);
		}
		return false;
	}
}
