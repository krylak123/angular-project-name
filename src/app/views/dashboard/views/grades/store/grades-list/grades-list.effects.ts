import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { GradesService } from './../grades.service';
import * as gradesListActions from './grades-list.actions';

@Injectable()
export class GradesListEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(gradesListActions.gradesLoad),
      mergeMap(() =>
        this.service.loadGradesList().pipe(
          map((res) => gradesListActions.gradesLoadSuccess({ res })),
          catchError((error) => of(gradesListActions.gradesLoadFail(error)))
        )
      )
    );
  });

  loadFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(gradesListActions.gradesLoadFail),
        tap(({ error }) => {
          this.snackbar.open(error.error, 'Gitówa');
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private service: GradesService,
    private snackbar: MatSnackBar
  ) {}
}
