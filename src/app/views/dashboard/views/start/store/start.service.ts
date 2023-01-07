import { Injectable } from '@angular/core';
import { ListResponse } from '@appStore/models/list-response.interface';
import { mockMessages } from '@core/mocks/messages.mock';
import { mockTodaySchedule } from '@core/mocks/today-schedule.mock';
import { Message } from '@core/models/message.interface';
import { Schedule } from '@core/models/schedule.interface';
import { delay, Observable, of } from 'rxjs';

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
