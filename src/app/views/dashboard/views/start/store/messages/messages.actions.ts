import { HttpErrorResponse } from '@angular/common/http';
import { Message } from '@core/models/message.interface';
import { createAction, props } from '@ngrx/store';
import { startActionPrefix } from '../start.constants';

const messagesActionsTypes = {
  load: `${startActionPrefix} Load messages`,
  loadSuccess: `${startActionPrefix} Load messages success`,
  loadnFail: `${startActionPrefix} Load messages fail`,
};

export const messagesLoad = createAction(messagesActionsTypes.load);

export const messagesLoadSuccess = createAction(
  messagesActionsTypes.loadSuccess,
  props<{ list: Message[] }>()
);

export const messagesLoadFail = createAction(
  messagesActionsTypes.loadnFail,
  props<{ error: HttpErrorResponse }>()
);
