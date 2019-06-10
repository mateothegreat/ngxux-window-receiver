import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxWindowReceiverComponent } from './ngxux-window-receiver.component';

describe('NgxuxWindowReceiverComponent', () => {
  let component: NgxuxWindowReceiverComponent;
  let fixture: ComponentFixture<NgxuxWindowReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxWindowReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxWindowReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
