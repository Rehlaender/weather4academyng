import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  CitiesActionType,
  GetCity,
  GetCitySuccess,
  GetCityError,
} from '../actions/cities.actions';

@Injectable()
export class CitiesEffects {
  // Listen for the 'GET_CITY' action
  @Effect()
  getCity$: Observable<Action> = this.actions$.pipe(
    ofType(CitiesActionType.GET_CITY),
    mergeMap(action =>
      this.http.get('http://api.openweathermap.org/data/2.5/weather?q=tokyo,japan&units=metric&APPID=ea07077cbdfd161a3a94b6572515407d').pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: CitiesActionType.GET_CITY_SUCCESS, payload: data })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: CitiesActionType.GET_CITY_ERROR }))
      )
    )
  );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
