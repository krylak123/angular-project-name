import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { StartService } from './../start.service';
import * as messageActions from './messages.actions';

@Injectable()
export class MessagesEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(messageActions.messagesLoad),
      mergeMap(() =>
        this.service.load().pipe(
          map((res) => messageActions.messagesLoadSuccess({ list: res.list })),
          catchError((error) => of(messageActions.messagesLoadFail(error)))
        )
      )
    );
  });

  loadFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(messageActions.messagesLoadFail),
        tap(({ error }) => {
          this.snackbar.open(error.error, 'Gitówa');
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private service: StartService,
    private snackbar: MatSnackBar
  ) {}
}
