import {CitiesActionType, CitiesActionsUnion} from '../actions/cities.actions';

const initialState = [
    {
      id: 1,
      name: 'monterrey from store',
    }
]

export function reducer(state = initialState, action: CitiesActionsUnion) {
  switch (action.type) {
    case CitiesActionType.GET_CITY:
      return state;
    case CitiesActionType.GET_CITY_SUCCESS:
      return state;
    default:
      return state;
  }
}
