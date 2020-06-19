import { Component } from '@angular/core';
import { CountryService } from './services/country.service';
import { ICountryData } from './models/country';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'capital', 'population', 'currencies', 'flag'];
  dataSource: any;
  constructor(private countryService: CountryService) { }
  title = 'country-todo-app';
  regions = [
    { value: 'Europe', name: 'Europe' },
    { value: 'Asia', name: 'Asia' }
  ];
  labelName: string = 'Region';
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
    console.log(this.countryData);
    this.dataSource = this.countryData;
  }
}
