import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ScheduleComponent } from './schedule.component';
import { ScheduleListEffects } from './store/schedule-list/schedule-list.effects';
import { scheduleFeatureKey } from './store/schedule.constants';
import { scheduleReducers } from './store/schedule.reducer';

export const scheduleRoutes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    providers: [
      provideState(scheduleFeatureKey, scheduleReducers),
      provideEffects(ScheduleListEffects),
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
