import { TestBed } from '@angular/core/testing';

import { GuitarServiceService } from './guitar-service.service';

describe('GuitarServiceService', () => {
  let service: GuitarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
