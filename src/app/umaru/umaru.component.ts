import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

const happy = `assets/images/umarus/happy.png`;
const question = `assets/images/umarus/question.png`;
const sad = `assets/images/umarus/sad.png`;

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

  returnMood(umaru) {
    const {emotion} = umaru;
    switch(emotion) {
      case 'happy':
        return happy;
      case 'question':
        return question;
      case 'sad':
        return sad;
      default:
        return question;
    }
  }

}
