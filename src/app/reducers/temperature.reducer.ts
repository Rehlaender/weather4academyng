import {TemperatureActionType, TemperatureActionsUnion} from '../actions/temperature.actions';

const initialState = {
  unit: 'f'
}

export function reducer(state = initialState, action: TemperatureActionsUnion) {
  switch (action.type) {
    case TemperatureActionType.CHANGE_UNIT_TO_F:
      return {
        ...state,
        unit: 'f'
      };
    case TemperatureActionType.CHANGE_UNIT_TO_C:
      return {
        ...state,
        unit: 'c'
      };
    default:
      return state;
  }
}
