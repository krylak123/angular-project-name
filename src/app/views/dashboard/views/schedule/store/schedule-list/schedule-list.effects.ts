import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { ScheduleService } from '../schedule.service';
import * as scheduleListActions from './schedule-list.actions';

@Injectable()
export class ScheduleListEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(scheduleListActions.scheduleListLoad),
      mergeMap(({ id }) =>
        this.service.loadScheduleList(id).pipe(
          map((res) =>
            scheduleListActions.scheduleListLoadSuccess({ list: res })
          ),
          catchError((error) =>
            of(scheduleListActions.scheduleListLoadFail(error))
          )
        )
      )
    );
  });

  loadFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(scheduleListActions.scheduleListLoadFail),
        tap(({ error }) => {
          this.snackbar.open(error.error, 'Gitówa');
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private service: ScheduleService,
    private snackbar: MatSnackBar
  ) {}
}
