import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { LoginGuard } from './routing/loginGuard/loginGuard.service';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'dashboard', component: OverviewComponent, canActivate: [LoginGuard] },
	{ path: 'detail/:id', component: DetailComponent, canActivate: [LoginGuard] },
	{ path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
