import { HttpErrorResponse } from '@angular/common/http';

export enum LoadingState {
  INIT = 'init',
  LOADING = 'loading',
  LOADED = 'loaded',
}

export interface ErrorState {
  error: HttpErrorResponse;
}

export type CallState = LoadingState | ErrorState;

export interface ItemState {
  callState: CallState;
}
