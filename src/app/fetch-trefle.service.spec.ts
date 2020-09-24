import { TestBed } from '@angular/core/testing'

import { FetchTrefleService } from './fetch-trefle.service'

describe('FetchTrefleService', () => {
  let service: FetchTrefleService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FetchTrefleService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy()
  });
});
