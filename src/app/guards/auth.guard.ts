import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { selectIsLogged } from '@appStore/auth/auth.selectors';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { AppState } from './../store/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate() {
    return this.store.select(selectIsLogged).pipe(
      tap((isLogged) => {
        if (!isLogged) this.router.navigate(['auth']);
      })
    );
  }
}
