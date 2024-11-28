import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVerticalBarChartComponent } from './ngx-vertical-bar-chart.component';

describe('NgxVerticalBarChartComponent', () => {
  let component: NgxVerticalBarChartComponent;
  let fixture: ComponentFixture<NgxVerticalBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxVerticalBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxVerticalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
