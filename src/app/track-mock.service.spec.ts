import { TestBed, inject } from '@angular/core/testing';

import { TrackMockService } from './track-mock.service';

describe('TrackMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackMockService]
    });
  });

  it('should be created', inject([TrackMockService], (service: TrackMockService) => {
    expect(service).toBeTruthy();
  }));
});
