/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultaCepService } from './consultacep.service';

describe('Service: Register2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaCepService]
    });
  });

  it('should ...', inject([ConsultaCepService], (service: ConsultaCepService) => {
    expect(service).toBeTruthy();
  }));
});
