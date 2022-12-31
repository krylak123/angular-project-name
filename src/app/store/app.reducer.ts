import { routerReducer, RouterState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
export interface AppState {
  router: RouterState;
}

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
};
