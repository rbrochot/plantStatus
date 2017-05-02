import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

declare var navigator: any;

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
	enableProdMode();
}

export function main() {
	return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
	main();
} else {
	document.addEventListener('DOMContentLoaded', main);
}

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/plant-status-service-worker.js');
}
