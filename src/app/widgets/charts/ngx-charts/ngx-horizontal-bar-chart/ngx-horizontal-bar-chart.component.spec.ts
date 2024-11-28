import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHorizontalBarChartComponent } from './ngx-horizontal-bar-chart.component';

describe('NgxHorizontalBarChartComponent', () => {
  let component: NgxHorizontalBarChartComponent;
  let fixture: ComponentFixture<NgxHorizontalBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxHorizontalBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxHorizontalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
