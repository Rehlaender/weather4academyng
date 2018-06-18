import { TestBed, inject } from '@angular/core/testing';

import { SearchCityService } from './search-city.service';

describe('SearchCityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchCityService]
    });
  });

  it('should be created', inject([SearchCityService], (service: SearchCityService) => {
    expect(service).toBeTruthy();
  }));
});
