import { Routes } from '@angular/router';
import { InfoComponent } from './info.component';

export const infoRoutes: Routes = [
  {
    path: '',
    component: InfoComponent,
    children: [
      {
        path: 'contact',
        loadChildren: () =>
          import('./views/contact/contact.routes').then((r) => r.contactRoutes),
      },
      {
        path: 'organization',
        loadChildren: () =>
          import('./views/organization/organization.routes').then(
            (r) => r.organizationRoutes
          ),
      },
      {
        path: 'practices',
        loadChildren: () =>
          import('./views/practices/practices.routes').then(
            (r) => r.practicesRoutes
          ),
      },
      {
        path: 'prints',
        loadChildren: () =>
          import('./views/prints/prints.routes').then((r) => r.printsRoutes),
      },
      {
        path: '**',
        redirectTo: 'contact',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
