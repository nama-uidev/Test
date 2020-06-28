import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryService } from './country.service';
import { HttpClient } from '@angular/common/http';
import { Mock } from 'ts-mockery';
import { ICountryData } from '../models/country';
import { of } from 'rxjs';

describe('ServicesService', () => {
  let countryService: CountryService;
  let mockHttpClient: HttpClient;
  const countryresponse: ICountryData[] = [
    {
      name: 'sample',
      capital: 'capital',
      population: 123,
      currencies: [
        {
          code: 'asd',
          name: 'sampleasd',
          symbol: 'test',
        },
      ],
      flag: 'http://test.svg',
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryService]
    });
    mockHttpClient = Mock.of<HttpClient>({
      get: () => of(countryresponse)
    });
    countryService = new CountryService(
      mockHttpClient
    );
  });

  it('should be created', () => {
    expect(countryresponse).toBeTruthy();
  });

  it('should call get countries', () => {
   countryService.getCountryData('Asia').subscribe(data => {
     expect(data).toEqual(countryresponse);
   });
  });
});
