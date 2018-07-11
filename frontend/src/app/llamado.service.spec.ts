import { TestBed, inject } from '@angular/core/testing';

import { LlamadoService } from './llamado.service';

describe('LlamadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LlamadoService]
    });
  });

  it('should be created', inject([LlamadoService], (service: LlamadoService) => {
    expect(service).toBeTruthy();
  }));
});
