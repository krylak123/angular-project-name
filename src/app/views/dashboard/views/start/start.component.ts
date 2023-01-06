import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingState } from '@appStore/models/item-state.interface';
import { LetModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { messagesLoad } from './store/messages/messages.actions';
import {
  selectMessagesCallState,
  selectMessagesList,
} from './store/messages/messages.selectors';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    LetModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartComponent implements OnInit {
  protected messagesCallState$ = this.store.select(selectMessagesCallState);
  protected messagesList$ = this.store.select(selectMessagesList);
  protected readonly loadinStateValues = LoadingState;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(messagesLoad());
  }
}
