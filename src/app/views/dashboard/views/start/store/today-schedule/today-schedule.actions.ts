import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Schedule } from '../models/schedule.interface';
import { startActionPrefix } from '../start.constants';

const todayScheduleActionsTypes = {
  load: `${startActionPrefix} Load today schedule`,
  loadSuccess: `${startActionPrefix} Load today schedule success`,
  loadnFail: `${startActionPrefix} Load today schedule fail`,
};

export const todayScheduleLoad = createAction(todayScheduleActionsTypes.load);

export const todayScheduleLoadSuccess = createAction(
  todayScheduleActionsTypes.loadSuccess,
  props<{ schedule: Schedule }>()
);

export const todayScheduleLoadFail = createAction(
  todayScheduleActionsTypes.loadnFail,
  props<{ error: HttpErrorResponse }>()
);
