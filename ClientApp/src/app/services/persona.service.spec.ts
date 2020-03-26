import { TestBed } from '@angular/core/testing';

import { PersonaLService } from './persona.service';

describe('PersonaService', () => {
  let service: PersonaLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
