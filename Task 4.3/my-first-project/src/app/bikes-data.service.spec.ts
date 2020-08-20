import { TestBed } from '@angular/core/testing';

import { BikesDataService } from './bikes-data.service';

describe('BikesDataService', () => {
  let service: BikesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
