import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ASK } from '../actions/weather.actions';
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

  ngOnInit() {}

}
