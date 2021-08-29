import { TestBed } from '@angular/core/testing';

import { RegistercasoService } from './registercaso.service';

describe('RegistercasoService', () => {
  let service: RegistercasoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistercasoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
