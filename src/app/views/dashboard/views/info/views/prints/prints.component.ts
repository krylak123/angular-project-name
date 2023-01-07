import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { mockPrints } from '@core/mocks/prints.mock';
import { Prints } from '@core/models/pritns.interface';
import { FormatDatePipe } from '@core/pipes/format-date.pipe';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-prints',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    FormatDatePipe,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './prints.component.html',
  styleUrls: ['./prints.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrintsComponent {
  protected prints$ = new BehaviorSubject<Prints[]>(mockPrints);
  protected searchControl = this.fb.control<string>('');

  constructor(private fb: NonNullableFormBuilder) {}

  protected clearSearchControlValue(): void {
    this.searchControl.setValue('');
  }
}
