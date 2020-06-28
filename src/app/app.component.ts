import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GetRegions, GetCountries } from './actions/actions';
import { IAppState } from './states/app.state';
import { selectRegionList, selectCountriesList } from './selectors/app.selectors';
import { IRegion } from './models/regions';
import { ICountryList } from './models/countryList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'country-todo-app';
  labelName = 'Region';
  labelCountry = 'Country';
  showTable = false;
  regions$: Observable<IRegion[]>;
  countries$: Observable<ICountryList[]>;

  constructor(private store: Store<IAppState>) {
    this.regions$ = this.store.pipe(select(selectRegionList));
  }

  ngOnInit(){
    this.store.dispatch(new GetRegions());
  }

  displayCountries(value: string) {
    this.showTable = false;
    this.store.dispatch(new GetCountries(value));
    this.countries$ = this.store.pipe(select(selectCountriesList));
  }
}
