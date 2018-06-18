
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DeleteCity } from '../actions/savedCities.actions';
import { SuccessMessage, Hide, QuestionMessage } from '../actions/umaru.actions';
import { ChangeCity } from '../actions/cityDetail.actions';

import { umaruMessages } from '../constants/umaruMessages';

import { CitiesActionType } from '../actions/cities.actions';

@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities$: Observable<any>;
  temperature$: Observable<any>;
  private temperature;
  constructor(
    private store: Store<any>,
    private _router: Router
  ) {
    this.cities$ = store.pipe(select('savedCities'));
    store.pipe(select('temperature')).subscribe(
      data => {
        this.temperature = data;
      }
    );
  }

  deleteCity(city) {
    this.store.dispatch( new DeleteCity({city}));
    this.store.dispatch( new SuccessMessage({message: umaruMessages.deleteCityMessage(city)}));
    setTimeout(() => {
      this.store.dispatch( new Hide());
    },3000);
  }

  goCity(city) {
    console.log('city', city)
    this.store.dispatch( new ChangeCity(city));
    this.store.dispatch( new QuestionMessage({message: umaruMessages.cityDetailMessage(city)}));
    setTimeout(() => {
      this.store.dispatch( new Hide());
    },3000);
    this._router.navigate(['/detail']);
  }

  returnMainTemp(temperature) {
    return (this.temperature === {units: 'f'}) ? (`${Math.floor(temperature - 273.15)}°f`) : `${Math.floor(((temperature-273.15)*1.8)+32)}°c`;
  }

  ngOnInit() {}

}
