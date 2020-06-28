import { IAppState } from '../states/app.state';
import { ActionReducerMap } from '@ngrx/store';
import { regionReducer } from './region.reducer';
import { countryReducer } from './country.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    countries: countryReducer,
    regions: regionReducer
};
