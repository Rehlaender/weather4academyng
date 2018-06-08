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
import * as fromCityDetail from './cityDetail.reducer';
import * as fromCount from './count.reducer';

import { environment } from '../../environments/environment';

import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  cities: fromCities.reducer,
  savedCities: fromSavedCities.reducer,
  umaru: fromUmaru.reducer,
  temperature: fromTemperature.reducer,
  cityDetail: fromCityDetail.reducer,
  count: fromCount.reducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['cityDetail', 'savedCities', 'temperature', 'count']})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
