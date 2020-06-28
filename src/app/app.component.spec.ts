import { TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CountryService } from './services/country.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectCountriesList, selectRegionList } from './selectors/app.selectors';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MemoizedSelector } from '@ngrx/store';
import { IAppState } from './states/app.state';
import { ICountryList } from './models/countryList';

describe('AppComponent', () => {
  let mockStore: MockStore;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockCountriesSelector: MemoizedSelector<IAppState, ICountryList[]>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [CountryService,  provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockStore.overrideSelector(
      selectRegionList,
      [
        { value: 'Europe', name: 'Europe' },
        { value: 'Asia', name: 'Asia' }
      ]
    );
    mockCountriesSelector = mockStore.overrideSelector(
      selectCountriesList,
      null
    );
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should check regions data from store', () => {
    component.regions$.subscribe(data => {
      expect(data).toEqual([
        { value: 'Europe', name: 'Europe' },
        { value: 'Asia', name: 'Asia' }
      ]);
    });
  });

  it('should call display Countries', () => {
    mockCountriesSelector.setResult([{name: 'sample'}]);
    mockStore.refreshState();
    component.displayCountries('Asia');
    expect(component.showTable).toBeFalsy();
    component.countries$.subscribe(data => {
      expect(data).toEqual([{name: 'sample'}]);
    });
  });

});

