import { Routes } from '@angular/router';
export const loginRoutes: Routes = [
  {
    path: '',
    title: 'Logowanie',
    loadComponent: () =>
      import('./login.component').then((c) => c.LoginComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
