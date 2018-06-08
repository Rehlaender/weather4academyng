import { Action } from '@ngrx/store';

export enum CityDetailActionType {
  CHANGE_CITY = '[CityDetail] Change city',
}

export class ChangeCity implements Action {
  readonly type = CityDetailActionType.CHANGE_CITY;
  constructor(public payload: any) {}
}

export type CityDetailActionsUnion = ChangeCity;
