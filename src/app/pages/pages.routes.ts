import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        //Las rutas que van a funcionar con el router-outlet secundario
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'progress', component: ProgressComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];


// forRoot para rutas principales
// forChild para rutas hijas , router outlets dentro de otros router outlets
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)