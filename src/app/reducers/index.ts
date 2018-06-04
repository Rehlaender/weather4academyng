import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromCities from './cities.reducer';

import { environment } from '../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  cities: fromCities.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
