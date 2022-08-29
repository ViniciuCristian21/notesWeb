import { TestBed } from '@angular/core/testing';

import { AlertToDeleteService } from './alert-to-delete.service';

describe('AlertToDeleteService', () => {
  let service: AlertToDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertToDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
