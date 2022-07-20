import { TestBed } from '@angular/core/testing';

import { FetchedProductsService } from './fetched-products.service';

describe('FetchedProductsService', () => {
  let service: FetchedProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
