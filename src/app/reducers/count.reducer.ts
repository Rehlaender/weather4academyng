import {CountActionType, CountActionsUnion} from '../actions/count.actions';

const countStorage = JSON.parse(localStorage.getItem('count'));
const initialState = (countStorage !== null) ? countStorage : 0;

export function reducer(state = initialState, action: CountActionsUnion) {
  switch (action.type) {
    case CountActionType.ADD_ONE_TIC:
    console.log(state, 'wtf')
    const newState = state + 1;
    return newState;
    default:
      return state;
  }
}
