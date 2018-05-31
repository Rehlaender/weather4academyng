import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const SAYHI = 'SAYHI';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:
      console.log('increment');
      return state + 1;

    case DECREMENT:
      console.log('decrement');
      return state - 1;

    case RESET:
      console.log('reset');
      return 0;

    case SAYHI:
      console.log('say hi', action.payload);
      return state;

    default:
      return state;
  }
}
