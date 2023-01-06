import { ActionReducerMap } from '@ngrx/store';
import { messagesReducer, MessagesState } from './messages/messages.reducer';
import {
  todayScheduleReducer,
  TodayScheduleState,
} from './today-schedule/today-schedule.reducer';

export interface StartState {
  messages: MessagesState;
  todaySchedule: TodayScheduleState;
}

export const startReducers: ActionReducerMap<StartState> = {
  messages: messagesReducer,
  todaySchedule: todayScheduleReducer,
};
