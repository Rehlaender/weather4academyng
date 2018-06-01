import { Action } from '@ngrx/store';

import * as CounterActions from './counter.actions';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const SAYHI = 'SAYHI';

const initialState = {
  state: 0,
  cities: [
    {
      id: 1,
      name: 'monterrey from store'
    }
  ]
}

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      console.log('increment');
      return state.state + 1;

    case DECREMENT:
      console.log('decrement');
      return state.state - 1;

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
