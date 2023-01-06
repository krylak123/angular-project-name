import { Routes } from '@angular/router';
import { GradesComponent } from './grades.component';

export const gradesRoutes: Routes = [
  {
    path: '',
    component: GradesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
