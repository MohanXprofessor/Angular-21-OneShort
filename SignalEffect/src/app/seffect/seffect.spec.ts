import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seffect } from './seffect';

describe('Seffect', () => {
  let component: Seffect;
  let fixture: ComponentFixture<Seffect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seffect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seffect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
