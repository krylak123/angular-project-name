import { createSelector } from '@ngrx/store';
import { AppState } from './../app.reducer';
import { AuthState } from './auth.reducer';

export const selectAuthFeature = (state: AppState) => state.auth;

export const selectAuthCallState = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.callState
);

export const selectAuthIsLogged = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.isLogged
);

export const selectAuthUserInfo = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.userInfo
);
