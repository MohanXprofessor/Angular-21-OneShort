import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setget } from './setget';

describe('Setget', () => {
  let component: Setget;
  let fixture: ComponentFixture<Setget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Setget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Setget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
