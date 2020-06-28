import { IRegion, IRegionData } from '../models/regions';
export interface IRegionState {
    regions: IRegion[];
}

export const initialRegionState: IRegionData = {
    regions: [
        { value: 'Europe', name: 'Europe' },
        { value: 'Asia', name: 'Asia' }
    ]
};
