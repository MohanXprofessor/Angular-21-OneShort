import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parenthome } from './parenthome';

describe('Parenthome', () => {
  let component: Parenthome;
  let fixture: ComponentFixture<Parenthome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parenthome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parenthome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
