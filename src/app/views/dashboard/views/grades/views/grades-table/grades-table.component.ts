import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '@appStore/app.reducer';
import { selectCustomRouterInfo } from '@appStore/router/router.selectors';
import { BaseRxDirective } from '@core/abstracts/base-rx.abstract';
import { Store } from '@ngrx/store';
import { map, takeUntil, tap } from 'rxjs';
import {
  gradesLoad,
  setCurrentGrades,
} from '../../store/grades-list/grades-list.actions';
import { selectCurrentUser } from '../../store/grades-list/grades-list.seletors';

@Component({
  selector: 'app-grades-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './grades-table.component.html',
  styleUrls: ['./grades-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradesTableComponent extends BaseRxDirective implements OnInit {
  protected routerInfo$ = this.rootStore.select(selectCustomRouterInfo);
  protected grades$ = this.store.select(selectCurrentUser);

  protected readonly displayedColumns: string[] = [
    'position',
    'techer',
    'passForm',
    'subjectType',
    'date',
    'grade',
  ];

  constructor(
    private rootStore: Store<AppState>,
    private store: Store,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(gradesLoad());

    this.routerInfo$
      .pipe(
        map((router) => router.params['semester']),
        tap((semester) => {
          if (semester > 7 || semester < 1)
            this.router.navigate(['semester/1'], { relativeTo: this.aRoute });

          this.store.dispatch(setCurrentGrades({ id: semester }));
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }
}
