import { createSelector } from '@ngrx/store';
import { selectStartState } from '../start.selectors';
import { selectAllMessages } from './messages.reducer';

export const selectMessagesState = createSelector(
  selectStartState,
  (state) => state.messages
);

export const selectMessagesCallState = createSelector(
  selectMessagesState,
  (state) => state.callState
);

export const selectMessagesList = createSelector(
  selectMessagesState,
  selectAllMessages
);
