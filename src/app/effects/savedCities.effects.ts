import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { SearchCityService } from '../services/search-city.service';

import {
  SavedCitiesActionType,
  GetCitiesInStorage,
  SetCitiesInStore,
  AddCity,
  DeleteCity,
} from '../actions/savedCities.actions';

import {
  CitiesActionType
} from '../actions/cities.actions';

@Injectable()
export class SavedCitiesEffects {

  @Effect()
  searchCity$: Observable<Action> = this.actions$.pipe(
    ofType(SavedCitiesActionType.SEARCH_CITY),
    mergeMap(action =>
      this._searchCityService.searchCity(action).pipe(
        // If successful, dispatch success action with resutlt
        map(data => ({ type: SavedCitiesActionType.SEARCH_CITY_SUCCESS, payload: data })),
        // If request fails, dispatch failed action
        catchError((error) => of({ type: SavedCitiesActionType.SEARCH_CITY_FAILURE, payload: error }))
      )
    )
  );

  constructor(private http: HttpClient, private _searchCityService: SearchCityService, private actions$: Actions) {}
}
