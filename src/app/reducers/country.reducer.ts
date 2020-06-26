import { ActionTypes } from '../shared/enum/country-action-types.enum';
import { ActionParent } from '../actions/country.actions';
import { ICountryData } from '../models/country';

export const initialState: ICountryData[] = [
    {
        name: undefined,
        capital: undefined,
        population: undefined,
        currencies: [],
        flag: undefined
    }
]

export function CountryReducer(state = initialState, action: ActionParent) {
    switch (action.type) {

    }
}