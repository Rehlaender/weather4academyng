import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'umaru',
  templateUrl: './umaru.component.html',
  styleUrls: ['./umaru.component.scss']
})
export class UmaruComponent implements OnInit {
  umaru$: Observable<any>;

  constructor(
    private store: Store<any>
  ) {
    this.umaru$ = store.pipe(select('umaru'));
  }

  ngOnInit() {
  }


  returnMood() {

  }

}
