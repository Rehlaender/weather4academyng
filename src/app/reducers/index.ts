import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromCities from './cities.reducer';

import { environment } from '../../environments/environment';

import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  cities: fromCities.reducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['cities']})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
