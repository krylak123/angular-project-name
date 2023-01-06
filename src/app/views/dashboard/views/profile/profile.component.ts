import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { AppState } from '@appStore/app.reducer';
import { selectAuthUserInfo } from '@appStore/auth/auth.selectors';
import { Store } from '@ngrx/store';
import { ConfirmDialogComponent } from './modules/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    ConfirmDialogComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  protected userInfo$ = this.rootStore.select(selectAuthUserInfo);
  protected readonly displayedColumns: string[] = [
    'position',
    'deadline',
    'ammount',
    'isPaid',
    'action',
  ];

  constructor(private rootStore: Store<AppState>, private dialog: MatDialog) {}

  protected handlePaymentBtn(): void {
    this.dialog.open(ConfirmDialogComponent);
  }
}
