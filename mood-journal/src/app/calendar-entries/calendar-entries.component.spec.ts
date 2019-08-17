import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEntriesComponent } from './calendar-entries.component';

describe('CalendarEntriesComponent', () => {
  let component: CalendarEntriesComponent;
  let fixture: ComponentFixture<CalendarEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
