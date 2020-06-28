import { IAppState } from '../states/app.state';
import { IRegionState } from '../states/region.state';
import { ICountryState } from '../states/country.state';
import { createSelector } from '@ngrx/store';

const selectRegions = (state: IAppState) => state.regions;
const selectCountries = (state: IAppState) => state.countries;

export const selectRegionList = createSelector(
    selectRegions,
    (state: IRegionState) => state.regions
);

export const selectCountriesList = createSelector(
    selectCountries,
    (state: ICountryState) => state.countries
);
