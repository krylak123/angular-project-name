import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { StartComponent } from './start.component';
import { MessagesEffects } from './store/messages/messages.effects';
import { startFeatureKey } from './store/start.constants';
import { startReducers } from './store/start.reducer';
import { TodayScheduleEffects } from './store/today-schedule/today-schedule.effects';

export const startRoutes: Routes = [
  {
    path: '',
    component: StartComponent,
    providers: [
      provideState(startFeatureKey, startReducers),
      provideEffects(MessagesEffects, TodayScheduleEffects),
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
