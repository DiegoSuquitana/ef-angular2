/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VermasService } from './vermas.service';

describe('VermasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VermasService]
    });
  });

  it('should ...', inject([VermasService], (service: VermasService) => {
    expect(service).toBeTruthy();
  }));
});
