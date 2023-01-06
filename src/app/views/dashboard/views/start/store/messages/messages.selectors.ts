import { createSelector } from '@ngrx/store';
import { selectStartState } from '../start.selectors';
import { StartState } from './../start.reducer';

export const selectMessagesState = createSelector(
  selectStartState,
  (state: StartState) => state.messages
);

export const selectMessagesCallState = createSelector(
  selectMessagesState,
  (state) => state.callState
);
