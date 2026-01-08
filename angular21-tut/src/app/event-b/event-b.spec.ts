import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventB } from './event-b';

describe('EventB', () => {
  let component: EventB;
  let fixture: ComponentFixture<EventB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
