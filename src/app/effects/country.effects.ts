import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CountryLoad } from '../actions/country.actions';
import { ActionTypes } from '../shared/enum/country-action-types.enum';
import { CountryService } from '../services/country.service';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class CountryEffects {
    @Effect() loadCountries = this.actions
        .pipe(
            ofType<CountryLoad>(ActionTypes.Load),
            mergeMap(
                () => this.countryService.getCountryData();
        )
    )

    constructor(private actions: Actions, private countryService: CountryService) {

    }
}