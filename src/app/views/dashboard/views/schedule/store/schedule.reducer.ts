import { ActionReducerMap } from '@ngrx/store';
import {
  scheduleListReducer,
  ScheduleListState,
} from './schedule-list/schedule-list.reducer';

export interface ScheduleState {
  scheduleList: ScheduleListState;
}

export const scheduleReducers: ActionReducerMap<ScheduleState> = {
  scheduleList: scheduleListReducer,
};
