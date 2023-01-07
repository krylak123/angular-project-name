import { Routes } from '@angular/router';
import { ScheduleComponent } from './schedule.component';

export const scheduleRoutes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];