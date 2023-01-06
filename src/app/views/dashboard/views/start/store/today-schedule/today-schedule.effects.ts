import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { StartService } from './../start.service';
import * as todayScheduleActions from './today-schedule.actions';

@Injectable()
export class TodayScheduleEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(todayScheduleActions.todayScheduleLoad),
      mergeMap(() =>
        this.service.loadTodaySchedule().pipe(
          map((schedule) =>
            todayScheduleActions.todayScheduleLoadSuccess({ schedule })
          ),
          catchError((error) =>
            of(todayScheduleActions.todayScheduleLoadFail(error))
          )
        )
      )
    );
  });

  loadFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(todayScheduleActions.todayScheduleLoadFail),
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
