import { createFeatureSelector } from '@ngrx/store';
import { startFeatureKey } from './start.constants';
import { StartState } from './start.reducer';

export const selectStartState =
  createFeatureSelector<StartState>(startFeatureKey);
