import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmaruComponent } from './umaru.component';

describe('UmaruComponent', () => {
  let component: UmaruComponent;
  let fixture: ComponentFixture<UmaruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmaruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
