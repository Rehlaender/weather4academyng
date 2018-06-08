import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromCities from './cities.reducer';
import * as fromSavedCities from './savedCities.reducer';
import * as fromUmaru from './umaru.reducer';
import * as fromTemperature from './temperature.reducer';

import { environment } from '../../environments/environment';

import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  cities: fromCities.reducer,
  savedCities: fromSavedCities.reducer,
  umaru: fromUmaru.reducer,
  temperature: fromTemperature.reducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['cities', 'savedCities']})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
