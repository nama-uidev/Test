import { initialRegionState, IRegionState } from '../states/region.state';
import { AppActions, EAppActions } from '../actions/actions';

export const regionReducer = (
    state = initialRegionState,
    action: AppActions
): IRegionState => {
    switch (action.type){
        case EAppActions.GetRegions: {
            return {
                ...state
            };
        }
    }
};
