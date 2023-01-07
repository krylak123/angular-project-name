import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { gradesTabRoutes } from './config/grades-tab-routes.config';
import { GradesTableComponent } from './views/grades-table/grades-table.component';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [CommonModule, MatTabsModule, RouterModule, GradesTableComponent],
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradesComponent {
  protected readonly tabRoutes = gradesTabRoutes;
}
