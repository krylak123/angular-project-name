import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { navConfig } from './configs/nav.config';
import { NavItemComponent } from './modules/nav-item/nav-item.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, NavItemComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  protected readonly navConfig = navConfig;
}
