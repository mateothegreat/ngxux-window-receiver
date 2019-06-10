import { TestBed } from '@angular/core/testing';

import { NgxuxWindowReceiverService } from './ngxux-window-receiver.service';

describe('NgxuxWindowReceiverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxWindowReceiverService = TestBed.get(NgxuxWindowReceiverService);
    expect(service).toBeTruthy();
  });
});
