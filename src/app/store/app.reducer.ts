import { routerReducer, RouterState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { authRedcuer, AuthState } from './auth/auth.reducer';
export interface AppState {
  auth: AuthState;
  router: RouterState;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: authRedcuer,
  router: routerReducer,
};
