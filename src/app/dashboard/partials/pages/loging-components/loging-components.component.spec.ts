import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingComponentsComponent } from './loging-components.component';

describe('LogingComponentsComponent', () => {
  let component: LogingComponentsComponent;
  let fixture: ComponentFixture<LogingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogingComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
