import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usernotfound } from './usernotfound';

describe('Usernotfound', () => {
  let component: Usernotfound;
  let fixture: ComponentFixture<Usernotfound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usernotfound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usernotfound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
