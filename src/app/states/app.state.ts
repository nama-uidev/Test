import { ICountryState, initialCountryState } from './country.state';
import { IRegionState, initialRegionState } from './region.state';

export interface IAppState {
    countries: ICountryState;
    regions: IRegionState;
}

export const initialAppState: IAppState = {
    countries: initialCountryState,
    regions: initialRegionState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
