import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';

import { CityComponentComponent } from './city-component/city-component.component';
import { CityformComponent } from './cityform/cityform.component';
import { CityListComponent } from './city-list/city-list.component';

// containers
import { HomeViewComponent } from "./containers/home-view/home-view.component";
import { DetailsComponent } from './containers/details/details.component';

// routing
import { AppRoutingModule } from './app-routing.module';

// reducers
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// efects
import { EffectsModule } from '@ngrx/effects';

import { AppEffects } from './app.effects';
import { CitiesEffects } from './effects/cities.effects';
import { SavedCitiesEffects } from './effects/savedCities.effects';

// services
import { SearchCityService } from './services/search-city.service';

import { environment } from '../environments/environment';
import { UmaruComponent } from './umaru/umaru.component';


@NgModule({
  declarations: [
    AppComponent,
    CityComponentComponent,
    CityformComponent,
    CityListComponent,
    HomeViewComponent,
    UmaruComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects, CitiesEffects, SavedCitiesEffects]),
  ],
  providers: [
    SearchCityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
