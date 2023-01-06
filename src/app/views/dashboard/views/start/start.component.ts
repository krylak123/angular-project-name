import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppState } from '@appStore/app.reducer';
import { selectAuthUserInfo } from '@appStore/auth/auth.selectors';
import { LoadingState } from '@appStore/models/item-state.interface';
import { LetModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { messagesLoad } from './store/messages/messages.actions';
import {
  selectMessagesCallState,
  selectMessagesList,
} from './store/messages/messages.selectors';
import { todayScheduleLoad } from './store/today-schedule/today-schedule.actions';
import {
  selectTodaySchedule,
  selectTodayScheduleCallState,
} from './store/today-schedule/today-schedule.selectors';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    LetModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    ClipboardModule,
    MatTooltipModule,
    MatListModule,
  ],
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartComponent implements OnInit {
  protected userInfo$ = this.rootStore.select(selectAuthUserInfo);
  protected messagesCallState$ = this.store.select(selectMessagesCallState);
  protected messagesList$ = this.store.select(selectMessagesList);
  protected todayScheduleCallState$ = this.store.select(
    selectTodayScheduleCallState
  );
  protected todaySchedule$ = this.store.select(selectTodaySchedule);
  protected readonly loadinStateValues = LoadingState;

  constructor(private store: Store, private rootStore: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(messagesLoad());
    this.store.dispatch(todayScheduleLoad());
  }

  protected formatToString(value: number): string {
    return value.toString();
  }
}
