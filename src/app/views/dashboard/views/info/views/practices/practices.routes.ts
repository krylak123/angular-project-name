import { Routes } from '@angular/router';
import { PracticesComponent } from './practices.component';

export const practicesRoutes: Routes = [
  {
    path: '',
    component: PracticesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
