import { TestBed } from '@angular/core/testing';

import { MyNotesService } from './my-notes.service';

describe('MyNotesService', () => {
  let service: MyNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
