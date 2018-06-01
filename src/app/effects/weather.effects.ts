import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

const getCityById = "api.openweathermap.org/data/2.5/weather?q=monterrey&units=metric&APPID=ea07077cbdfd161a3a94b6572515407d"
const getCityByName = "api.openweathermap.org/data/2.5/weather?q=monterrey&units=metric&APPID=ea07077cbdfd161a3a94b6572515407d"
const getCityByNameAndCountry = "api.openweathermap.org/data/2.5/weather?q=monterrey&units=metric&APPID=ea07077cbdfd161a3a94b6572515407d"


@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions, http: HttpClient) {}
  // get city by id
  @Effect()
  getCityById$: Observable<Action> = this.actions$.pipe(
    ofType('GET_CITY_BY_ID'),
    mergeMap(action =>
      this.http.get('/auth', action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: 'REQUEST_SUCCESS', payload: data })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: 'REQUEST_FAILED' }))
      )
    )
  );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
