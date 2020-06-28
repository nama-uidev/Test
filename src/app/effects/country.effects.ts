import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CountryService } from '../services/country.service';
import { switchMap } from 'rxjs/operators';
import { EAppActions, GetCountries } from '../actions/actions';
import { of } from 'rxjs';
import { ICountryData } from '../models/country';

@Injectable()
export class CountryEffects {
    @Effect() getCountries$ = this.actions$
        .pipe(
            ofType<any>(EAppActions.GetCountries),
            switchMap((action) => this.countryService.getCountryData(action.payload)),
            switchMap((data: ICountryData[]) => {
                return of(new GetCountries(data));
            })
    );

    constructor(private actions$: Actions, private countryService: CountryService) {

    }
}
