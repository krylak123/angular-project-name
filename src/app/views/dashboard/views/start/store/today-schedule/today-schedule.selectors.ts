import { createSelector } from '@ngrx/store';
import { selectStartState } from '../start.selectors';

export const selectTodayScheduleState = createSelector(
  selectStartState,
  (state) => state.todaySchedule
);

export const selectTodayScheduleCallState = createSelector(
  selectTodayScheduleState,
  (state) => state.callState
);

export const selectTodaySchedule = createSelector(
  selectTodayScheduleState,
  (state) => state.schedule
);
