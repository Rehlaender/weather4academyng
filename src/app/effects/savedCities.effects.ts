import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { SearchCityService } from '../services/search-city.service';

import {
  SavedCitiesActionType,
  GetCitiesInStorage,
  SetCitiesInStore,
  AddCity,
  DeleteCity,
  SavedCitiesActionsUnion,
} from '../actions/savedCities.actions';

import {
  CitiesActionType
} from '../actions/cities.actions';

import {
  UmaruActionType
} from '../actions/umaru.actions';
import { umaruMessages } from '../constants/umaruMessages';

@Injectable()
export class SavedCitiesEffects {

  @Effect()
  searchCity$: Observable<Action> = this.actions$.pipe(
    ofType(SavedCitiesActionType.SEARCH_CITY),
    mergeMap(action =>
      this._searchCityService.searchCity(action).pipe(
        // If successful, dispatch success action with resutlt
        switchMap(data =>
        {
          const newCity = data;
          const citiesInStorage = JSON.parse(localStorage.getItem('savedCities'));
          let isThere = false;
          citiesInStorage.map(help => {
            if(help.id == newCity['id']) {
              isThere = true;
            }
          });
          if(!isThere) {
            return [
              { type: SavedCitiesActionType.SEARCH_CITY_SUCCESS, payload: data },
              { type: UmaruActionType.SUCCESS_MESSAGE, payload: {message: umaruMessages.successCityMessage(data)} }
            ]
          } else {
            return [
              { type: UmaruActionType.FAILURE_MESSAGE, payload: {message: umaruMessages.youHaveThatCityMessage} }
            ]
          }
        }
        ),
        // If request fails, dispatch failed action
        catchError((error) => of(
          { type: SavedCitiesActionType.SEARCH_CITY_FAILURE, payload: error },
          { type: UmaruActionType.FAILURE_MESSAGE, payload: {message: umaruMessages.failureCityMessage(error)} }
        ))
      )
    )
  );

  constructor(private http: HttpClient, private _searchCityService: SearchCityService, private actions$: Actions) {}
}
