import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user.interface';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isLogged: boolean;
  userInfo: User | null;
}

const initialState: AuthState = {
  isLogged: false,
  userInfo: null,
};

export const authRedcuer = createReducer(
  initialState,
  on(
    AuthActions.loginSuccess,
    (state, { userInfo }): AuthState => ({
      ...state,
      isLogged: true,
      userInfo,
    })
  ),
  on(
    AuthActions.logoutSuccess,
    (state): AuthState => ({
      ...state,
      isLogged: true,
      userInfo: null,
    })
  )
);
