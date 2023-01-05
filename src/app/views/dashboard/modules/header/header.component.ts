import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AppState } from '@appStore/app.reducer';
import { logout } from '@appStore/auth/auth.actions';
import { selectUserInfo } from '@appStore/auth/auth.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected userInfo$ = this.store.select(selectUserInfo);

  constructor(private store: Store<AppState>, private router: Router) {}

  protected handleGoHome(): void {
    this.router.navigate(['dashboard']);
  }

  protected handleLogout(): void {
    this.store.dispatch(logout());
  }
}
