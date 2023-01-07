import { createFeatureSelector } from '@ngrx/store';
import { gradesFeatureKey } from './grades.constants';
import { GradesState } from './grades.reducer';

export const selectGradesState =
  createFeatureSelector<GradesState>(gradesFeatureKey);
