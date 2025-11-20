import { TestBed } from '@angular/core/testing';

import { InterSeptorCacheingService } from './inter-septor-cacheing.service';

describe('InterSeptorCacheingService', () => {
  let service: InterSeptorCacheingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterSeptorCacheingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
