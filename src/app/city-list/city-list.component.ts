import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DeleteCity } from '../actions/savedCities.actions';
import { SuccessMessage } from '../actions/umaru.actions';
import { umaruMessages } from '../constants/umaruMessages';

import { CitiesActionType } from '../actions/cities.actions';

@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities$: Observable<any>;

  constructor(
    private store: Store<any>
  ) {
    this.cities$ = store.pipe(select('savedCities'));
  }

  deleteCity(city) {
    this.store.dispatch( new DeleteCity({city}));
    this.store.dispatch( new SuccessMessage({message: umaruMessages.deleteCityMessage(city)}));
  }


  ngOnInit() {}

}
