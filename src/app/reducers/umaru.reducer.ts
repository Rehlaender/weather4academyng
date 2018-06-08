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
        isVisible: true,
        message,
      };
    case UmaruActionType.TOGGLE_VISIBILITY:
      const {isVisible} = action.payload;
      return {
        ...state,
        isVisible: !isVisible
      };
    case UmaruActionType.FAILURE_MESSAGE:
      return {
        ...state,
        emotion: 'sad',
        isVisible: true,
        message: action.payload.message
      };
    case UmaruActionType.QUESTION_MESSAGE:
      console.log(action.payload, 'lets go');
      return {
        ...state,
        emotion: 'question',
        isVisible: true,
        message: action.payload.message
      };
    case UmaruActionType.HIDE:
      return {
        ...state,
        isVisible: false
      };
    case UmaruActionType.SHOW:
      return {
        ...state,
        isVisible: true
      };
    default:
      return state;
  }
}
