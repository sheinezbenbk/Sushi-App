import { TestBed } from '@angular/core/testing';

import { GetBoxService } from './get-box.service';

describe('GetBoxService', () => {
  let service: GetBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
