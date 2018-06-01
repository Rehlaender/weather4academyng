import { Action } from '@ngrx/store';

export const ADD_CITY = 'ADD_CITY';

export class AddCity implements Action {
  readonly type = ADD_CITY;
  payload: any;
}

export type WeatherActions = AddCity;
