import { createSelector } from '@ngrx/store';
import { selectScheduleState } from '../schedule.selectors';
import { selectAllScheduleList } from './schedule-list.reducer';

export const selectScheduleListState = createSelector(
  selectScheduleState,
  (state) => state.scheduleList
);

export const selectScheduleListCallState = createSelector(
  selectScheduleListState,
  (state) => state.callState
);

export const selectScheduleListList = createSelector(
  selectScheduleListState,
  selectAllScheduleList
);
