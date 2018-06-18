import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AddOneTic } from './actions/count.actions';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count$: Observable<any>;
  title = 'app';
  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  startTimer() {
    setInterval(() => {
      this.store.dispatch(new AddOneTic());
    }, 1000);
  }

  ngOnInit() {
    this.startTimer();
  }
}
