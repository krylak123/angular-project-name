import { ItemState, LoadingState } from '@appStore/models/item-state.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Message } from './../models/message.interface';
import * as messagesActions from './messages.actions';

export interface MessagesState extends ItemState, EntityState<Message> {}

export const messagesAdapter: EntityAdapter<Message> =
  createEntityAdapter<Message>();

export const { selectIds, selectEntities, selectAll, selectTotal } =
  messagesAdapter.getSelectors();

export const initialState: MessagesState = messagesAdapter.getInitialState({
  callState: LoadingState.INIT,
});

export const messagesReducer = createReducer(
  initialState,
  on(messagesActions.messagesLoad, (state) => ({
    ...state,
    callState: LoadingState.LOADING,
  })),
  on(messagesActions.messagesLoadSuccess, (state, { list }) =>
    messagesAdapter.setAll(list, { ...state, callState: LoadingState.LOADED })
  ),
  on(messagesActions.messagesLoadFail, (state, { error }) => ({
    ...state,
    callState: error,
  }))
);
