import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // count$: Observable<any>;
  title = 'app';
  constructor(private store: Store<AppState>) {
    // this.count$ = store.pipe(select('count'));
  }
}
