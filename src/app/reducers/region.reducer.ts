import { ActionTypes } from '../shared/enum/country-action-types.enum';
import { ActionParent } from '../actions/country.actions';

export const initialState = [
    { value: 'Europe', name: 'Europe' },
    { value: 'Asia', name: 'Asia' }
];

export function RegionReducer(state = initialState, action: ActionParent) {
    switch (action.type) {
        default: return state;
    }
}