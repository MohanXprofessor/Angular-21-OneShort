import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyEvent } from './key-event';

describe('KeyEvent', () => {
  let component: KeyEvent;
  let fixture: ComponentFixture<KeyEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
