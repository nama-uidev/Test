import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionComponent } from './region.component';
import { IRegion } from '../../models/regions';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;
  const inputData: IRegion[] = [
    { value: 'Europe', name: 'Europe' },
    { value: 'Asia', name: 'Asia' }
];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.componentInstance;
    component.items = inputData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check input data', () => {
    expect(component.items).toEqual(inputData);
  });
});
