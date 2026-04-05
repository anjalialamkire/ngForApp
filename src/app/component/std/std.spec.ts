import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std } from './std';

describe('Std', () => {
  let component: Std;
  let fixture: ComponentFixture<Std>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Std]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Std);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
