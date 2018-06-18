import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { Action } from '@ngrx/store';

import {
  CountActionType
} from './actions/count.actions';
import {
  UmaruActionType
} from './actions/umaru.actions';

@Injectable()
export class AppEffects {

  // @Effect()
  // reloadCities$: Observable<Action> = this.actions$.pipe(
  //   ofType(CountActionType.ADD_ONE_TIC),
  //   map(action => {
  //       console.log(action);
  //       if(action === 3600) {
  //         return { type: UmaruActionType.QUESTION_MESSAGE, payload: {message: 'i will update your cities'} }
  //       } else {
  //         return { type: UmaruActionType.NULL }
  //       }
  //     }
  //   )
  // );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
