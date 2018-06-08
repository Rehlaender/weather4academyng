import { Action } from '@ngrx/store';

export enum UmaruActionType {
  SUCCESS_MESSAGE = '[Umaru] say a success message',
  FAILURE_MESSAGE = '[Umaru] say a failure message',
  QUESTION_MESSAGE = '[Umaru] say a question message',
  TOGGLE_VISIBILITY = '[Umaru] toggle visibility',
  HIDE = '[Umaru] hide',
  SHOW = '[Umaru] show',
}

export class SuccessMessage implements Action {
  readonly type = UmaruActionType.SUCCESS_MESSAGE;
  constructor(public payload: any) {}
}

export class FailureMessage implements Action {
  readonly type = UmaruActionType.FAILURE_MESSAGE;
  constructor(public payload: any) {}
}

export class QuestionMessage implements Action {
  readonly type = UmaruActionType.QUESTION_MESSAGE;
  constructor(public payload: any) {}
}

export class ToggleVisibility implements Action {
  readonly type = UmaruActionType.TOGGLE_VISIBILITY;
  constructor(public payload: any) {}
}

export class Hide implements Action {
  readonly type = UmaruActionType.HIDE;
}

export class Show implements Action {
  readonly type = UmaruActionType.SHOW;
}


export type UmaruActionsUnion = SuccessMessage
| FailureMessage
| QuestionMessage
| ToggleVisibility
| Hide
| Show;
