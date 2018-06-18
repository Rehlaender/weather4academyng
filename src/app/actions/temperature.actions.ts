import { Action } from '@ngrx/store';

export enum TemperatureActionType {
  CHANGE_UNIT_TO_F = '[Temperature] change unit to f',
  CHANGE_UNIT_TO_C = '[Temperature] change unit to c',
}

export class ChangeUnitToF implements Action {
  readonly type = TemperatureActionType.CHANGE_UNIT_TO_F;
}

export class ChangeUnitToC implements Action {
  readonly type = TemperatureActionType.CHANGE_UNIT_TO_C;
}

export type TemperatureActionsUnion = ChangeUnitToF
| ChangeUnitToC;
