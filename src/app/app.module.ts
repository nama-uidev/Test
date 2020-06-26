import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionComponent } from '../app/components/region/region.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CountryService } from './services/country.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { RegionReducer } from '../app/reducers/region.reducer';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    StoreModule.forRoot({ regions: RegionReducer })
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }