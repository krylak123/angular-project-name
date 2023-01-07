import { ActionReducerMap } from '@ngrx/store';
import {
  gradesListReducer,
  GradesListState,
} from './grades-list/grades-list.reducer';

export interface GradesState {
  gradesList: GradesListState;
}

export const gradesReducers: ActionReducerMap<GradesState> = {
  gradesList: gradesListReducer,
};
