import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'city-component',
  templateUrl: './city-component.component.html',
  styleUrls: ['./city-component.component.css']
})
export class CityComponentComponent implements OnInit {

  @Output() sayHi: EventEmitter<any> = new EventEmitter();
  @Input() city:any;

  constructor() { }

  dispatchSayHi(city) {
     this.sayHi.emit(city);
  }

  ngOnInit() {
  }

}
