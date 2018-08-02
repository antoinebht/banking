import { TestBed, inject } from '@angular/core/testing';

import { AppConfigService } from './app-config.service';

describe('services\appConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppConfigService]
    });
  });

  it('should be created', inject([AppConfigService], (service: AppConfigService) => {
    expect(service).toBeTruthy();
  }));
});
