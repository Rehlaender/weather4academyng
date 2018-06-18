import { Action } from '@ngrx/store';

export const ADD_CITY = 'ADD_CITY';
export const ASK = 'ASK';

export class AddCity implements Action {
  readonly type = ADD_CITY;
  payload: any;
}

export class Ask implements Action {
  readonly type = ASK;
  payload: any;
}

export type WeatherActions = AddCity | Ask;
