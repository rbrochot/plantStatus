import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';

import { AgentListComponent } from './shared/agentList/agentList.component';
import { ElementStatusListComponent } from './shared/elementStatusList/elementStatusList.component';
import { ElementStatusComponent } from './shared/elementStatus/elementStatus.component';

import { ApiService } from './shared';
import { LoginGuard } from './routing/loginGuard/loginGuard.service';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const firebaseConfig = {
	apiKey: 'AIzaSyBZ8HmZo2L0tSC43VaLnepOpaGrN__uUTw',
	authDomain: 'plant-status.firebaseapp.com',
	databaseURL: 'https://plant-status.firebaseio.com',
	storageBucket: 'plant-status.appspot.com',
	messagingSenderId: '395812815522'
};

const firebaseAuthConfig = {
	provider: AuthProviders.Google,
	method: AuthMethods.Popup
};

@NgModule({
	imports: [
		AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
		BrowserModule,
		BrowserModule,
		HttpModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		HomeComponent,
		OverviewComponent,
		DetailComponent,
		AboutComponent,
		AgentListComponent,
		ElementStatusListComponent,
		ElementStatusComponent,
	],
	providers: [
		ApiService,
		LoginGuard
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
