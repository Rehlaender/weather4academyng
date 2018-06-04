import { Component, OnInit } from '@angular/core';

import * as WeatherActions from '../actions/weather.actions';

import { Store } from '@ngrx/store';

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
    // this.store.dispatch(new WeatherActions.AddCity(city));
    console.log(city, 'asdf');
  }

  ngOnInit() {
  }

}
