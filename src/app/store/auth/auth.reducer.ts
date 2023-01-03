import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user.interface';
import * as AuthActions from './auth.actions';
import { mockUser } from './mock/user.mock';

export interface AuthState {
  isLogged: boolean;
  userInfo: User | null;
}

const initialState: AuthState = {
  isLogged: true,
  userInfo: mockUser,
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
      isLogged: false,
      userInfo: null,
    })
  )
);
