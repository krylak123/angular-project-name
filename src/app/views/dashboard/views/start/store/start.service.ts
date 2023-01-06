import { Injectable } from '@angular/core';
import { ListResponse } from '@appStore/models/list-response.interface';
import { delay, Observable, of } from 'rxjs';
import { mockMessages } from './mocks/messages.mock';
import { mockTodaySchedule } from './mocks/today-schedule.mock';
import { Message } from './models/message.interface';
import { Schedule } from './models/schedule.interface';

@Injectable({
  providedIn: 'root',
})
export class StartService {
  loadMessagesList(): Observable<ListResponse<Message>> {
    return of(mockMessages).pipe(delay(1000));
  }

  loadTodaySchedule(): Observable<Schedule> {
    return of(mockTodaySchedule).pipe(delay(1000));
  }
}
