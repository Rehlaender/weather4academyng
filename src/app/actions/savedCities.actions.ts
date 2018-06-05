import { Action } from '@ngrx/store';

export enum SavedCitiesActionType {
  GET_CITIES_IN_STORAGE = '[SavedCities] get all cities ids',
  SET_CITIES_IN_STORE = '[SavedCities] set all cities',
  SEARCH_CITY = '[SavedCities] search a city',
  SEARCH_CITY_SUCCESS = '[SavedCities] search a city was a success',
  SEARCH_CITY_FAILURE = '[SavedCities] search a city was a failure',
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

export class SearchCity implements Action {
  readonly type = SavedCitiesActionType.SEARCH_CITY;
  constructor(public payload: any) {}
}

export class SearchCitySuccess implements Action {
  readonly type = SavedCitiesActionType.SEARCH_CITY_SUCCESS;
  constructor(public payload: any) {}
}

export class SearchCityFailure implements Action {
  readonly type = SavedCitiesActionType.SEARCH_CITY_FAILURE;
  constructor(public payload: any) {}
}

export class AddCity implements Action {
  readonly type = SavedCitiesActionType.ADD_CITY;
  constructor(public payload: any) {}
}

export class DeleteCity implements Action {
  readonly type = SavedCitiesActionType.DELETE_CITY;
}

export type SavedCitiesActionsUnion = GetCitiesInStorage
| SetCitiesInStore
| AddCity
| DeleteCity
| SearchCity
| SearchCitySuccess
| SearchCityFailure;
