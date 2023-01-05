import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { User } from './../../core/models/user.interface';

const authActionPrefix = '[Auth]';

const authActionsTypes = {
  login: `${authActionPrefix} Login`,
  loginSuccess: `${authActionPrefix} Login success`,
  loginFail: `${authActionPrefix} Login fail`,
  logout: `${authActionPrefix} Logout`,
  logoutSuccess: `${authActionPrefix} Logout success`,
  logoutFail: `${authActionPrefix} Logout fail`,
};

export const login = createAction(authActionsTypes.login);
export const loginSuccess = createAction(
  authActionsTypes.loginSuccess,
  props<{ userInfo: User }>()
);
export const loginFail = createAction(
  authActionsTypes.loginFail,
  props<{ error: HttpErrorResponse }>()
);

export const logout = createAction(authActionsTypes.logout);
export const logoutSuccess = createAction(authActionsTypes.logoutSuccess);
export const logoutFail = createAction(
  authActionsTypes.logoutFail,
  props<{ error: HttpErrorResponse }>()
);
