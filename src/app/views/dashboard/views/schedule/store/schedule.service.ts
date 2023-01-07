import { Injectable } from '@angular/core';
import { ListResponse } from '@appStore/models/list-response.interface';
import { mockSchedule } from '@core/mocks/schedule.mock';
import { Schedule } from '@core/models/schedule.interface';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  loadScheduleList(id: number): Observable<ListResponse<Schedule>> {
    return of(mockSchedule.find((arr) => arr.id === id)!.schedule).pipe(
      delay(1000)
    );
  }
}
