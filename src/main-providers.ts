import {
  MatDialogConfig,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  MatSnackBarConfig,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { TitleStrategy } from '@angular/router';
import { TitleService } from './app/core/services/title.service';

export const appProviders = [
  {
    provide: TitleStrategy,
    useClass: TitleService,
  },
  {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000,
    } as MatSnackBarConfig,
  },
  {
    provide: MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
      disableClose: true,
    } as MatDialogConfig,
  },
];
