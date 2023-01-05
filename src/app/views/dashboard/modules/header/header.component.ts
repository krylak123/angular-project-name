import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { AppState } from '@appStore/app.reducer';
import { logout } from '@appStore/auth/auth.actions';
import {
  selectAuthCallState,
  selectAuthUserInfo,
} from '@appStore/auth/auth.selectors';
import { LoadingState } from '@appStore/models/item-state.interface';
import { LetModule } from '@ngrx/component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    LetModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected authCallState$ = this.store.select(selectAuthCallState);
  protected userInfo$ = this.store.select(selectAuthUserInfo);
  protected callStateValues = LoadingState;

  constructor(private store: Store<AppState>, private router: Router) {}

  protected handleGoHome(): void {
    this.router.navigate(['dashboard']);
  }

  protected handleLogout(): void {
    this.store.dispatch(logout());
  }
}
