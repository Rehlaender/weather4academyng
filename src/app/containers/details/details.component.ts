import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

import { Hide, QuestionMessage } from '../../actions/umaru.actions';
import { umaruMessages } from '../../constants/umaruMessages';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  cityDetail$: Observable<any>;
  private temperature;
  constructor(
    private store: Store<any>, private _router: Router
  ) {
    this.cityDetail$ = store.pipe(select('cityDetail'));
  }

  goBack() {
    this._router.navigate(['/']);
    this.store.dispatch( new QuestionMessage({message: umaruMessages.goBackHome}));
    setTimeout(() => {
      this.store.dispatch( new Hide());
    },3000);
  }

  ngOnInit() {
  }

}
