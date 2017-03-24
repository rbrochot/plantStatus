import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Injectable()
export class LoginGuard implements CanActivate {
	currentAuth: Object;

	constructor(private af: AngularFire) {
		this.af.auth.subscribe(auth => this.currentAuth = auth);
	}

	canActivate() {
		return this.currentAuth != null;
	}
}
