import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/auth/auth.routes').then((r) => r.authRoutes),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./views/dashboard/dashboard.routes').then(
        (r) => r.dashboardRoutes
      ),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
