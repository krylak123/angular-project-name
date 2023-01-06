import { Injectable } from '@angular/core';
import { ListResponse } from '@appStore/models/list-response.interface';
import { delay, Observable, of } from 'rxjs';
import { mockMessages } from './mocks/messages.mock';
import { Message } from './models/message.interface';

@Injectable({
  providedIn: 'root',
})
export class StartService {
  load(): Observable<ListResponse<Message>> {
    return of(mockMessages).pipe(delay(1000));
  }
}
