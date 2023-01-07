import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { InfoRoutesItems } from './configs/info-routes.config';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatDividerModule],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
  protected readonly routesItems = InfoRoutesItems;
}
