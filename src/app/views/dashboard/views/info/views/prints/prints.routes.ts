import { Routes } from '@angular/router';
import { PrintsComponent } from './prints.component';

export const printsRoutes: Routes = [
  {
    path: '',
    component: PrintsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
