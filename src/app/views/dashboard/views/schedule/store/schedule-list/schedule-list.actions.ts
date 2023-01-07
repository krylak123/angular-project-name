import { HttpErrorResponse } from '@angular/common/http';
import { ListResponse } from '@appStore/models/list-response.interface';
import { Schedule } from '@core/models/schedule.interface';
import { createAction, props } from '@ngrx/store';
import { scheduleActionPrefix } from '../schedule.constants';

const schedulesListActionsTypes = {
  load: `${scheduleActionPrefix} Load schedule list`,
  loadSuccess: `${scheduleActionPrefix} Load schedule list success`,
  loadnFail: `${scheduleActionPrefix} Load schedule list fail`,
};

export const scheduleListLoad = createAction(
  schedulesListActionsTypes.load,
  props<{ id: number }>()
);

export const scheduleListLoadSuccess = createAction(
  schedulesListActionsTypes.loadSuccess,
  props<{ list: ListResponse<Schedule> }>()
);

export const scheduleListLoadFail = createAction(
  schedulesListActionsTypes.loadnFail,
  props<{ error: HttpErrorResponse }>()
);
