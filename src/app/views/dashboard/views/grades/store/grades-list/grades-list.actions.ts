import { HttpErrorResponse } from '@angular/common/http';
import { ListResponse } from '@appStore/models/list-response.interface';
import { Grades } from '@core/models/grades.interface';
import { createAction, props } from '@ngrx/store';
import { gradesActionPrefix } from '../grades.constants';

const gradesActionsTypes = {
  load: `${gradesActionPrefix} Load grades`,
  loadSuccess: `${gradesActionPrefix} Load grades success`,
  loadnFail: `${gradesActionPrefix} Load gradesfail`,
  set: `${gradesActionPrefix} Set`,
};

export const gradesLoad = createAction(gradesActionsTypes.load);

export const gradesLoadSuccess = createAction(
  gradesActionsTypes.loadSuccess,
  props<{ res: ListResponse<Grades> }>()
);

export const gradesLoadFail = createAction(
  gradesActionsTypes.loadnFail,
  props<{ error: HttpErrorResponse }>()
);

export const setCurrentGrades = createAction(
  gradesActionsTypes.set,
  props<{ id: number }>()
);
