import { Action } from '@ngrx/store';

export enum CountActionType {
  ADD_ONE_TIC = '[Count] Add one tic',
}

export class AddOneTic implements Action {
  readonly type = CountActionType.ADD_ONE_TIC;
}

export type CountActionsUnion = AddOneTic;
