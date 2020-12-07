import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNoteComponent } from './the-note.component';

describe('TheNoteComponent', () => {
  let component: TheNoteComponent;
  let fixture: ComponentFixture<TheNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
