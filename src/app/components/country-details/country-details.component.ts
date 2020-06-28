import { Component, OnInit, Input } from '@angular/core';
import { ICountryData } from '../../models/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  @Input() data: ICountryData[];
  displayedColumns: string[];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = ['name', 'capital', 'population', 'currencies', 'flag'];
  }

}
