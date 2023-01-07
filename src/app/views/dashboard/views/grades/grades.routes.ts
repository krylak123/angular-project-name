import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { GradesComponent } from './grades.component';
import { GradesListEffects } from './store/grades-list/grades-list.effects';
import { gradesFeatureKey } from './store/grades.constants';
import { gradesReducers } from './store/grades.reducer';

export const gradesRoutes: Routes = [
  {
    path: '',
    component: GradesComponent,
    providers: [
      provideState(gradesFeatureKey, gradesReducers),
      provideEffects(GradesListEffects),
    ],
    children: [
      {
        path: 'semester/:semester',
        loadComponent: () =>
          import('./views/grades-table/grades-table.component').then(
            (c) => c.GradesTableComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'semester/1',
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
