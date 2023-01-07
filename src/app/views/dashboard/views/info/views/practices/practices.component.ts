import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PracticesComponent {

}
