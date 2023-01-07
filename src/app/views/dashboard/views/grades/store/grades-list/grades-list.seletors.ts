import { createSelector } from '@ngrx/store';
import { selectGradesState } from '../grades.selectors';
import {
  getSelectedUserId,
  selectAllGradesList,
  selectGradesListEntities,
} from './grades-list.reducer';

export const selectGradesListState = createSelector(
  selectGradesState,
  (state) => state.gradesList
);

export const selectGradesListCallState = createSelector(
  selectGradesListState,
  (state) => state.callState
);

export const selecGradesList = createSelector(
  selectGradesListState,
  selectAllGradesList
);

export const selectUserEntities = createSelector(
  selectGradesListState,
  selectGradesListEntities
);

export const selectCurrentUserId = createSelector(
  selectGradesListState,
  getSelectedUserId
);

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userId && userEntities[userId]
);
