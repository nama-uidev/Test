import { Component } from '@angular/core';
import { CountryService } from './services/country.service';
import { ICountryData } from './models/country';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IRegion } from '../app/models/regions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  regions: IRegion[];
  constructor(private regionStore: Store<{ regions: IRegion[] }>, private countryService: CountryService) {
    this.regionStore.pipe(select('regions')).subscribe(values => {
      this.regions = values;
    })
  }
  title = 'country-todo-app';
  labelName: string = 'Region';
  labelCountry: string = 'Country';
  isRegionSelected: boolean;
  countryData: ICountryData[] = [];
  countryDataRetrieved: any;
  obj: ICountryData;

  displayCountries(value) {
    this.isRegionSelected = true;
    this.countryService.getCountryData(value).subscribe(data => {
      this.countryDataRetrieved = data;
      this.countryDataRetrieved.forEach(element => {
        this.obj = {
          name: element.name,
          capital: element.capital,
          population: element.population,
          currencies: element.currencies,
          flag: element.flag
        }
        this.countryData.push(this.obj);
      }
      )
    });
  }
}
