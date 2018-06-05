import {SavedCitiesActionType, SavedCitiesActionsUnion} from '../actions/savedCities.actions';

const savedCitiesStorage = JSON.parse(localStorage.getItem('savedCities'));
const initialState = (savedCitiesStorage !== null) ? savedCitiesStorage : [];

export function reducer(state = initialState, action: SavedCitiesActionsUnion) {
  switch (action.type) {
    case SavedCitiesActionType.SEARCH_CITY:
      console.log('search this city', action);
      return state;
    case SavedCitiesActionType.SEARCH_CITY_SUCCESS:
      console.log('encontré esto', action.payload);
      return [
        ...state,
        action.payload
      ];
    case SavedCitiesActionType.SEARCH_CITY_FAILURE:
      console.log('no encuentro esa ciudad', action.payload.error);
      return state;
    default:
      return state;
  }
}
