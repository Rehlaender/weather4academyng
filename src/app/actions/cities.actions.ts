import { Action } from '@ngrx/store';

export const GET_CITY = 'GET_CITY';
export const GET_CITY_SUCCESS = 'GET_CITY_SUCCESS';
export const GET_CITY_ERROR = 'GET_CITY_ERROR';

export enum CitiesActionType {
  GET_CITY = '[City] GET',
  GET_CITY_SUCCESS = '[City] GET Succes',
  GET_CITY_ERROR = '[City] GET Failed',
}

export class GetCity implements Action {
  readonly type = CitiesActionType.GET_CITY;
}

export class GetCitySuccess implements Action {
  readonly type = CitiesActionType.GET_CITY_SUCCESS;
  constructor(public payload: any) {}
}

export class GetCityError implements Action {
  readonly type = CitiesActionType.GET_CITY_ERROR;
}

export type CitiesActionsUnion = GetCity | GetCitySuccess | GetCityError;
