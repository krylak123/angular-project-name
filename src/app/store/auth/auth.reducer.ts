import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user.interface';
import { ItemState, LoadingState } from './../models/item-state.interface';
import * as AuthActions from './auth.actions';

export interface AuthState extends ItemState {
  isLogged: boolean;
  userInfo: User | null;
}

const initialState: AuthState = {
  callState: LoadingState.INIT,
  isLogged: false,
  userInfo: null,
};

export const authRedcuer = createReducer(
  initialState,
  on(
    AuthActions.login,
    (state): AuthState => ({
      ...state,
      callState: LoadingState.LOADING,
    })
  ),
  on(
    AuthActions.loginSuccess,
    (state, { userInfo }): AuthState => ({
      ...state,
      callState: LoadingState.LOADED,
      isLogged: true,
      userInfo,
    })
  ),
  on(
    AuthActions.loginFail,
    (state, { error }): AuthState => ({
      ...state,
      callState: error,
      isLogged: true,
    })
  ),
  on(
    AuthActions.logout,
    (state, {}): AuthState => ({
      ...state,
      callState: LoadingState.LOADING,
    })
  ),
  on(
    AuthActions.logoutSuccess,
    (state, {}): AuthState => ({
      ...state,
      callState: LoadingState.LOADED,
      isLogged: false,
      userInfo: null,
    })
  ),
  on(
    AuthActions.logoutFail,
    (state, { error }): AuthState => ({
      ...state,
      callState: error,
      isLogged: false,
    })
  )
);
