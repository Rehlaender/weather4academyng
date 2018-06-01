import { Component, OnInit } from '@angular/core';

import * as WeatherActions from '../store/weather.actions';

import { Store } from '@ngrx/store';
import { SAYHI } from '../store/counter.reducer';

@Component({
  selector: 'cityform',
  templateUrl: './cityform.component.html',
  styleUrls: ['./cityform.component.css']
})
export class CityformComponent implements OnInit {
  private model = {
    city: '',
    id: 5
  }
  constructor(private store: Store<any>) { }

  addCity(city) {
    this.store.dispatch(new WeatherActions.AddCity(city));
  }

  ngOnInit() {
  }

}
