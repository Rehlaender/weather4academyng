import {SavedCitiesActionType, SavedCitiesActionsUnion} from '../actions/savedCities.actions';

const savedCitiesStorage = JSON.parse(localStorage.getItem('savedCities'));
const initialState = (savedCitiesStorage !== null) ? savedCitiesStorage : [];

export function reducer(state = initialState, action: SavedCitiesActionsUnion) {
  switch (action.type) {
    case SavedCitiesActionType.SEARCH_CITY:
      console.log('[saved cities] search this city', action);
      return state;
    case SavedCitiesActionType.SEARCH_CITY_SUCCESS:
      console.log('[saved cities] encontré esto', action.payload);
      return [
        ...state,
        action.payload
      ];
    case SavedCitiesActionType.DELETE_CITY:
      console.log('[saved cities] borraré esto', action.payload);
      const newCities = state.filter(city => city.id != action.payload.id);
      return [
        ...newCities
      ];
    case SavedCitiesActionType.SEARCH_CITY_FAILURE:
      return state;
    default:
      return state;
  }
}
