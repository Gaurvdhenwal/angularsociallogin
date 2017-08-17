import { TestBed, inject } from '@angular/core/testing';

import { LoginsuService } from './loginsu.service';

describe('LoginsuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginsuService]
    });
  });

  it('should be created', inject([LoginsuService], (service: LoginsuService) => {
    expect(service).toBeTruthy();
  }));
});
