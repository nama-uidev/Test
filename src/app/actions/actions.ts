import { Action } from '@ngrx/store';

export enum EAppActions {
    GetCountries = '[Countries] Get Countries',
    GetRegions = '[Regions] Get Regions'
}

export class GetCountries implements Action {
    public readonly type = EAppActions.GetCountries;
    constructor(public payload) {}
}

export class GetRegions implements Action {
    public readonly type = EAppActions.GetRegions;
}

export type AppActions = GetCountries | GetRegions;
