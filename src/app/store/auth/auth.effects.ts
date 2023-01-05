import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import * as authActions from './auth.actions';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.login),
      mergeMap(() =>
        this.service.login().pipe(
          map((userInfo) => authActions.loginSuccess({ userInfo })),
          catchError((error) => of(authActions.loginFail(error)))
        )
      )
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authActions.loginSuccess),
        tap(() => {
          this.router.navigate(['dashboard']);
          this.snackbar.open('Pomyślnie zalogowano', 'Gitówa');
        })
      );
    },
    { dispatch: false }
  );

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.logout),
      mergeMap(() =>
        this.service.logout().pipe(
          map(() => authActions.logoutSuccess()),
          catchError((error) => of(authActions.logoutFail(error)))
        )
      )
    );
  });

  logoutSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authActions.logoutSuccess),
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
    private service: AuthService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}
}
