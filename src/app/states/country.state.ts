import { ICountryApi } from '../models/country';
import { ICountryList } from '../models/countryList';
export interface ICountryState {
    countries: ICountryList[];
}

export const initialCountryState: ICountryApi = {
    countries: null
};
