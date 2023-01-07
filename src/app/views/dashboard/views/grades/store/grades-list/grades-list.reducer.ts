import { ItemState, LoadingState } from '@appStore/models/item-state.interface';
import { Grades } from '@core/models/grades.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as gradesListActions from './grades-list.actions';

export interface GradesListState extends ItemState, EntityState<Grades> {
  selectedUserId: number | null;
}

export function selectGradesListId(a: Grades): number {
  return a.semester;
}

export const gradesListAdapter: EntityAdapter<Grades> =
  createEntityAdapter<Grades>({
    selectId: selectGradesListId,
  });

export const getSelectedUserId = (state: GradesListState) =>
  state.selectedUserId;

const { selectIds, selectEntities, selectAll, selectTotal } =
  gradesListAdapter.getSelectors();

export const selectGradesListIds = selectIds;

export const selectGradesListEntities = selectEntities;

export const selectAllGradesList = selectAll;

export const selectGradesListTotal = selectTotal;

export const initialState: GradesListState = gradesListAdapter.getInitialState({
  callState: LoadingState.INIT,
  selectedUserId: 1,
});

export const gradesListReducer = createReducer(
  initialState,
  on(gradesListActions.gradesLoad, (state) => ({
    ...state,
    callState: LoadingState.LOADING,
  })),
  on(gradesListActions.gradesLoadSuccess, (state, { res }) =>
    gradesListAdapter.setAll(res.list, {
      ...state,
      callState: LoadingState.LOADED,
    })
  ),
  on(gradesListActions.gradesLoadFail, (state, { error }) => ({
    ...state,
    callState: error,
  })),
  on(gradesListActions.setCurrentGrades, (state, { id }) => ({
    ...state,
    selectedUserId: id,
  }))
);
