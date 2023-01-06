import { ItemState, LoadingState } from '@appStore/models/item-state.interface';
import { Schedule } from '@core/models/schedule.interface';
import { createReducer, on } from '@ngrx/store';
import * as todayScheduleActions from './today-schedule.actions';

export interface TodayScheduleState extends ItemState {
  schedule: Schedule | null;
}

export const initialState: TodayScheduleState = {
  callState: LoadingState.INIT,
  schedule: null,
};

export const todayScheduleReducer = createReducer(
  initialState,
  on(todayScheduleActions.todayScheduleLoad, (state) => ({
    ...state,
    callState: LoadingState.LOADING,
  })),
  on(todayScheduleActions.todayScheduleLoadSuccess, (state, { schedule }) => ({
    ...state,
    callState: LoadingState.LOADED,
    schedule,
  })),
  on(todayScheduleActions.todayScheduleLoadFail, (state, { error }) => ({
    ...state,
    callState: error,
  }))
);
