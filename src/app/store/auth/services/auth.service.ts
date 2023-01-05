import { Injectable } from '@angular/core';
import { User } from '@core/models/user.interface';
import { delay, Observable, of } from 'rxjs';
import { mockUser } from '../mocks/user.mock';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(): Observable<User> {
    return of(mockUser).pipe(delay(1000));
  }

  logout(): Observable<void> {
    return of(undefined).pipe(delay(1000));
  }
}
