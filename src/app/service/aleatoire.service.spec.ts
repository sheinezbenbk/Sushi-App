import { TestBed } from '@angular/core/testing';

import { AleatoireService } from './aleatoire.service';

describe('AleatoireService', () => {
  let service: AleatoireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AleatoireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
