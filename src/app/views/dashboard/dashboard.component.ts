import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import {
  BehaviorSubject,
  filter,
  fromEvent,
  iif,
  map,
  Observable,
  of,
} from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { HeaderComponent } from './modules/header/header.component';
import { NavigationComponent } from './modules/navigation/navigation.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    HeaderComponent,
    NavigationComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  private isScrollTopBtnVisible = new BehaviorSubject<boolean>(false);
  private tempScrollY: number = 0;

  protected get isScrollTopBtnVisible$(): Observable<boolean> {
    return this.isScrollTopBtnVisible.asObservable();
  }

  ngOnInit(): void {
    fromEvent(window, 'scroll')
      .pipe(
        map((e) => e.currentTarget as Window),
        map((window) => window.scrollY),
        switchMap((scroll) =>
          iif(
            () => this.iffCondition(scroll),
            this.handleScrollDown(scroll),
            this.handleScrollUp(scroll)
          )
        ),
        tap((scroll) => (this.tempScrollY = scroll))
      )
      .subscribe();
  }

  protected handleScrollToTop(): void {
    window.scrollTo(0, 0);
  }

  private iffCondition(scroll: number): boolean {
    if (this.tempScrollY < scroll && scroll > 500) {
      return true;
    } else if (this.tempScrollY > scroll && scroll < 500) {
      return false;
    }

    return false;
  }

  private handleScrollDown(value: number): Observable<number> {
    return of(value).pipe(
      filter((scroll) => this.tempScrollY < scroll && scroll > 500),
      tap(() => this.isScrollTopBtnVisible.next(true))
    );
  }

  private handleScrollUp(value: number): Observable<number> {
    return of(value).pipe(
      filter((scroll) => this.tempScrollY > scroll && scroll < 500),
      tap(() => this.isScrollTopBtnVisible.next(false))
    );
  }
}
