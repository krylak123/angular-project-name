import { ActionReducerMap } from '@ngrx/store';
import { messagesReducer, MessagesState } from './messages/messages.reducer';

export interface StartState {
  messages: MessagesState;
}

export const startReducers: ActionReducerMap<StartState> = {
  messages: messagesReducer,
};
