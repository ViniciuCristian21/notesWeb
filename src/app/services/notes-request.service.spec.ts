import { TestBed } from '@angular/core/testing';

import { NotesRequestService } from './notes-request.service';

describe('NotesRequestService', () => {
  let service: NotesRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
