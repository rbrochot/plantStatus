import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
	apiKey: 'AIzaSyBZ8HmZo2L0tSC43VaLnepOpaGrN__uUTw',
	authDomain: 'https://plant-status.firebaseio.com/',
	databaseURL: 'https://plant-status.firebaseio.com/',
	messagingSenderId: 'plantsStatusApp'
};

@NgModule({
	imports: [
		AngularFireModule.initializeApp(firebaseConfig),
		BrowserModule,
		BrowserModule,
		HttpModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent
	],
	providers: [
		ApiService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(public appRef: ApplicationRef) {}
	hmrOnInit(store) {
		console.log('HMR store', store);
	}
	hmrOnDestroy(store) {
		let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
		// recreate elements
		store.disposeOldHosts = createNewHosts(cmpLocation);
		// remove styles
		removeNgStyles();
	}
	hmrAfterDestroy(store) {
		// display new elements
		store.disposeOldHosts();
		delete store.disposeOldHosts;
	}
}
