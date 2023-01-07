import { createFeatureSelector } from '@ngrx/store';
import { scheduleFeatureKey } from './schedule.constants';
import { ScheduleState } from './schedule.reducer';

export const selectScheduleState =
  createFeatureSelector<ScheduleState>(scheduleFeatureKey);
