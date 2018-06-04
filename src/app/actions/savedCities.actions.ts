import { Action } from '@ngrx/store';

export enum SavedCitiesActionType {
  GET_CITIES_IN_STORAGE = '[SavedCities] get all cities ids',
  SET_CITIES_IN_STORE = '[SavedCities] set all cities',
  ADD_CITY = '[SavedCities] add a city',
  DELETE_CITY = '[SavedCities] delet a city',
}

export class GetCitiesInStorage implements Action {
  readonly type = SavedCitiesActionType.GET_CITIES_IN_STORAGE;
}

export class SetCitiesInStore implements Action {
  readonly type = SavedCitiesActionType.SET_CITIES_IN_STORE;
  constructor(public payload: any) {}
}

export class AddCity implements Action {
  readonly type = SavedCitiesActionType.ADD_CITY;
  constructor(public payload: any) {}
}

export class DeleteCity implements Action {
  readonly type = SavedCitiesActionType.DELETE_CITY;
}

export type SavedCitiesActionsUnion = GetCitiesInStorage | SetCitiesInStore | AddCity | DeleteCity;
