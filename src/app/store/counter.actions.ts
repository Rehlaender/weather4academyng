export const ADD_CITY: string = 'ADD_CITY';

export class ListSettingAction implements Action {
    readonly type: string = ADD_CITY;

    constructor(type, payload: any) {}
}
