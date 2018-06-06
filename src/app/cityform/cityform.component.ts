import { Component, OnInit } from '@angular/core';

import { SearchCity } from '../actions/savedCities.actions';

import { Store } from '@ngrx/store';

@Component({
  selector: 'cityform',
  templateUrl: './cityform.component.html',
  styleUrls: ['./cityform.component.css']
})
export class CityformComponent implements OnInit {

  private model = {
    city: '',
    country: '',
    id: null,
    searchBy: ''
  }

  constructor(private store: Store<any>) { }

  addCity(city) {
    this.store.dispatch( new SearchCity(city));
  }

  ngOnInit() {
  }

}
