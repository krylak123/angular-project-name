import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingState } from '@appStore/models/item-state.interface';
import { BaseRxDirective } from '@core/abstracts/base-rx.abstract';
import { FormatDateDayNamePipe } from '@core/pipes/format-date-day-name.pipe';
import { FormatDatePipe } from '@core/pipes/format-date.pipe';
import { LetModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, takeUntil, tap } from 'rxjs';
import { scheduleListLoad } from './store/schedule-list/schedule-list.actions';
import {
  selectScheduleListCallState,
  selectScheduleListList,
} from './store/schedule-list/schedule-list.selectors';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    LetModule,
    MatCardModule,
    FormatDatePipe,
    FormatDateDayNamePipe,
  ],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent extends BaseRxDirective implements OnInit {
  protected scheduleCallState$ = this.store.select(selectScheduleListCallState);
  protected schedule$ = this.store.select(selectScheduleListList);
  protected readonly loadingStateValues = LoadingState;
  private actualPage = new BehaviorSubject<number>(2);

  constructor(private store: Store) {
    super();
  }

  protected get actualPage$(): Observable<number> {
    return this.actualPage.asObservable();
  }

  ngOnInit(): void {
    this.actualPage$
      .pipe(
        tap((id) => this.store.dispatch(scheduleListLoad({ id }))),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  protected changePageBackward(): void {
    if (this.actualPage.value <= 1) return;

    this.actualPage.next(this.actualPage.value - 1);
  }

  protected changePageForward(): void {
    if (this.actualPage.value >= 3) return;

    this.actualPage.next(this.actualPage.value + 1);
  }
}
