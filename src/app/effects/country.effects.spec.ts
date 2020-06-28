import { TestBed } from '@angular/core/testing';
import { of, ReplaySubject, Subject } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { CountryEffects } from './country.effects';
import { CountryService } from '../services/country.service';
import { Mock } from 'ts-mockery';
import { GetCountries } from '../actions/actions';
import { ICountryData } from '../models/country';

describe('TodoListEffects', () => {
  let effects: CountryEffects;
  let actions: Subject<any>;
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
      providers: [
        CountryEffects,
        provideMockActions(() => actions),
        {
          provide: CountryService,
          useValue: Mock.of<CountryService>({
            getCountryData: () => of(countryresponse),
          }),
        },
      ],
    });
    effects = TestBed.inject(CountryEffects);
  });

  it('should return a stream with todo list loaded action', () => {
    actions = new ReplaySubject(1);
    actions.next(new GetCountries('Asia'));
    effects.getCountries$.subscribe((result) => {
      expect(result).toEqual(new GetCountries(countryresponse));
    });
  });
});
