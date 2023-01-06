import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Panel',
        loadChildren: () =>
          import('./views/start/start.routes').then((r) => r.startRoutes),
      },
      {
        path: 'profile',
        title: 'Profil',
        loadChildren: () =>
          import('./views/profile/profile.routes').then((r) => r.profileRoutes),
      },
      {
        path: 'plan',
        title: 'Plan Zajęć',
        loadChildren: () =>
          import('./views/schedule/schedule.routes').then(
            (r) => r.scheduleRoutes
          ),
      },
      {
        path: 'grades',
        title: 'Oceny',
        loadChildren: () =>
          import('./views/grades/grades.routes').then((r) => r.gradesRoutes),
      },
      {
        path: 'info',
        title: 'Informacje',
        loadChildren: () =>
          import('./views/info/info.routes').then((r) => r.infoRoutes),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
