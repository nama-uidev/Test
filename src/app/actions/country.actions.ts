import { Action } from '@ngrx/store';
import { ActionTypes } from '../shared/enum/country-action-types.enum';

export class ActionParent implements Action {
    type: any;
    payload: any;
}

export class CountryLoad implements ActionParent {
    type: ActionTypes.Load;
    constructor(public payload: any) {

    }
}