import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from './country-details.component';
import { ICountryData } from '../../models/country';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  const inputData: ICountryData[] = [
    {
      name: 'sample',
    capital: 'capital',
    population: 123,
    currencies: [
      {
        code: 'asd',
        name: 'sampleasd',
        symbol: 'test'
      }
    ],
    flag: 'http://test.svg'
}
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [MatTableModule],
      declarations: [ CountryDetailsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    component.data = inputData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check input data and columns', () => {
    expect(component.displayedColumns).toEqual(['name', 'capital', 'population', 'currencies', 'flag']);
    expect(component.data).toEqual(inputData);
  });
});
