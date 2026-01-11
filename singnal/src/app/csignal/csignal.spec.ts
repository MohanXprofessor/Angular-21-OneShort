import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSignal } from './csignal';

describe('CSignal', () => {
  let component: CSignal;
  let fixture: ComponentFixture<CSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
