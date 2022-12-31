import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './custom-route-serializer';

export const selectReducerState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const selectCustomRouterInfo = createSelector(
  selectReducerState,
  (state) => state.state
);
