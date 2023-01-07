import { Injectable } from '@angular/core';
import { ListResponse } from '@appStore/models/list-response.interface';
import { mockGrades } from '@core/mocks/grades.mock';
import { Grades } from '@core/models/grades.interface';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GradesService {
  loadGradesList(): Observable<ListResponse<Grades>> {
    return of(mockGrades).pipe(delay(1000));
  }
}
