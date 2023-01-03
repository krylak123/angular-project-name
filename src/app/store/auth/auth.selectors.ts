import { createSelector } from '@ngrx/store';
import { AppState } from './../app.reducer';
import { AuthState } from './auth.reducer';

export const selectAuthFeature = (state: AppState) => state.auth;

export const selectIsLogged = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.isLogged
);

export const selectUserInfo = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.userInfo
);
