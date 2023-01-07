import { ItemState, LoadingState } from '@appStore/models/item-state.interface';
import { Schedule } from '@core/models/schedule.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as scheduleListsActions from './schedule-list.actions';

export interface ScheduleListState extends ItemState, EntityState<Schedule> {}

export const scheduleListsAdapter: EntityAdapter<Schedule> =
  createEntityAdapter<Schedule>();

const { selectIds, selectEntities, selectAll, selectTotal } =
  scheduleListsAdapter.getSelectors();

export const selectScheduleListIds = selectIds;

export const selectScheduleListEntities = selectEntities;

export const selectAllScheduleList = selectAll;

export const selectScheduleListTotal = selectTotal;

export const initialState: ScheduleListState =
  scheduleListsAdapter.getInitialState({
    callState: LoadingState.INIT,
  });

export const scheduleListReducer = createReducer(
  initialState,
  on(scheduleListsActions.scheduleListLoad, (state) => ({
    ...state,
    callState: LoadingState.LOADING,
  })),
  on(scheduleListsActions.scheduleListLoadSuccess, (state, { list }) =>
    scheduleListsAdapter.setAll(list.list, {
      ...state,
      callState: LoadingState.LOADED,
    })
  ),
  on(scheduleListsActions.scheduleListLoadFail, (state, { error }) => ({
    ...state,
    callState: error,
  }))
);
