import { Routes } from '@angular/router';
export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./auth.component').then((c) => c.AuthComponent),
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./views/login/login.routes').then((r) => r.loginRoutes),
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
