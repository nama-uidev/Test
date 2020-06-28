import { AppActions, EAppActions } from '../actions/actions';
import { initialCountryState, ICountryState } from '../states/country.state';

export const countryReducer = (
    state = initialCountryState,
    action: AppActions
): ICountryState => {
    switch (action.type){
        case EAppActions.GetCountries: {
            return {
                ...state,
                countries: action.payload
            };
        }
    }
};
