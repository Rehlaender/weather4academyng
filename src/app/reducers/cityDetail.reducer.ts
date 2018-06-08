import {CityDetailActionType, CityDetailActionsUnion} from '../actions/cityDetail.actions';

const savedCityDetails = JSON.parse(localStorage.getItem('cityDetail'));
const initialState = (savedCityDetails !== null) ? savedCityDetails : [];

export function reducer(state = initialState, action: CityDetailActionsUnion) {
  switch (action.type) {
    case CityDetailActionType.CHANGE_CITY:
      console.log(action.payload);
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
