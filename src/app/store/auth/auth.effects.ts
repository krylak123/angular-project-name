import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import * as AuthActions from './auth.actions';
import { mockUser } from './mock/user.mock';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.login),
        tap(() =>
          this.store.dispatch(AuthActions.loginSuccess({ userInfo: mockUser }))
        )
      );
    },
    { dispatch: false }
  );

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          this.router.navigate(['dashboard']);
          this.snackbar.open('Pomyślnie zalogowano', 'Gitówa');
        })
      );
    },
    { dispatch: false }
  );

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => this.store.dispatch(AuthActions.logoutSuccess()))
      );
    },
    { dispatch: false }
  );

  logoutSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logoutSuccess),
        tap(() => {
          this.router.navigate(['auth']);
          this.snackbar.open('Pomyślnie wylogowano', 'Naura');
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private snackbar: MatSnackBar,
    private store: Store,
    private router: Router
  ) {}
}
