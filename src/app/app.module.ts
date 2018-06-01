import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { weatherReducer } from './store/weather.reducers';

import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './effects/weather.effects';

import { CityComponentComponent } from './city-component/city-component.component';
import { CityformComponent } from './cityform/cityform.component';
import { CityListComponent } from './city-list/city-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponentComponent,
    CityformComponent,
    CityListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer, weather:weatherReducer }),
    EffectsModule.forRoot([WeatherEffects])],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
