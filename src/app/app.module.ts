import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

import { CityComponentComponent } from './city-component/city-component.component';
import { CityformComponent } from './cityform/cityform.component';
import { CityListComponent } from './city-list/city-list.component';

// containers
import { HomeViewComponent } from "./containers/home-view/home-view.component";


import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppEffects } from './app.effects';
import { CitiesEffects } from './effects/cities.effects';

@NgModule({
  declarations: [
    AppComponent,
    CityComponentComponent,
    CityformComponent,
    CityListComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects, CitiesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
