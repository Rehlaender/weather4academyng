import {UmaruActionType, UmaruActionsUnion} from '../actions/umaru.actions';

const initialState = {
  isVisible: false,
  emotion: 'happy',
  mesesage: '',
  data: {}
}

export function reducer(state = initialState, action: UmaruActionsUnion) {
  switch (action.type) {
    case UmaruActionType.SUCCESS_MESSAGE:
      const {message} = action.payload;
      console.log("[umaru message]", message);
      return {
        ...state,
        emotion: 'happy',
        message
      };
    case UmaruActionType.TOGGLE_VISIBILITY:
      const {isVisible} = action.payload;
      return {
        ...state,
        !isVisible
      };
    case UmaruActionType.FAILURE_MESSAGE:
      return {
        ...state,
        emotion: 'sad',
        message
      };
    case UmaruActionType.QUESTION_MESSAGE:
      return {
        ...state,
        emotion: 'question',
        message
      };
    default:
      return state;
  }
}
