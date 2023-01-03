import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private isLoading = new BehaviorSubject<boolean>(false);

  protected get isLoading$(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.handleShowLoader();
  }

  private handleShowLoader(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.isLoading.next(true);
      }
      if (
        e instanceof NavigationEnd ||
        e instanceof NavigationCancel ||
        e instanceof NavigationError
      ) {
        this.isLoading.next(false);
      }
    });
  }
}
