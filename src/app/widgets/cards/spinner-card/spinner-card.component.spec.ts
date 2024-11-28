import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCardComponent } from './spinner-card.component';

describe('SpinnerCardComponent', () => {
  let component: SpinnerCardComponent;
  let fixture: ComponentFixture<SpinnerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerCardComponent]
    });
    fixture = TestBed.createComponent(SpinnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
