import * as WeatherActions from './weather.actions';

const initialState = {
  cities: [
    {
      id: 1,
      name: 'monterrey from store',
    }
  ]
}

export function weatherReducer(state = initialState, action: WeatherActions.WeatherActions) {
  switch (action.type) {
    case WeatherActions.ADD_CITY:
      return {
        ...state,
        cities: [...state.cities, action.payload]
      }
    default:
      return state;
  }
}
