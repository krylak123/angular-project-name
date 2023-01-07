import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prints',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prints.component.html',
  styleUrls: ['./prints.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrintsComponent {

}
