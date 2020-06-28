import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class CountryService {
  constructor(private httpClient: HttpClient) { }

  getCountryData(region: string) {
    return this.httpClient.get<any[]>(
      `${environment.baseUrl}restcountries.eu/rest/v2/region/${region}`
    );
  }
}
