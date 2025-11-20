import { TestBed } from '@angular/core/testing';

import { CacheingService } from './cacheing.service';

describe('CacheingService', () => {
  let service: CacheingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
