import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { login } from '@appStore/auth/auth.actions';
import { selectCallState } from '@appStore/auth/auth.selectors';
import { LoadingState } from '@appStore/models/item-state.interface';
import { LetModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { LoginForm } from '../../models/login-form.interface';
import { AppState } from './../../../../store/app.reducer';
import { FormService } from './../../services/form.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,LetModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  protected form: FormGroup<LoginForm> = this.formService.createLoginForm();
  protected authCallState$ = this.store.select(selectCallState);
  protected callStateValues = LoadingState;

  constructor(
    private snackBar: MatSnackBar,
    private formService: FormService,
    private store: Store<AppState>
  ) {}

  protected get formEmailControl(): FormControl<string> {
    return this.form.controls.email;
  }

  protected get formPasswordControl(): FormControl<string> {
    return this.form.controls.password;
  }

  protected handleRemindPassword(): void {
    this.snackBar.open('Chwilowo nie obsługujemy tej funckcji', 'Rozumiem');
  }

  protected handleLoginIn(): void {
    this.store.dispatch(login());
  }
}
