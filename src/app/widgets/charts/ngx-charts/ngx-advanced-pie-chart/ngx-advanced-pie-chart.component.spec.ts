import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdvancedPieChartComponent } from './ngx-advanced-pie-chart.component';

describe('NgxAdvancedPieChartComponent', () => {
  let component: NgxAdvancedPieChartComponent;
  let fixture: ComponentFixture<NgxAdvancedPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxAdvancedPieChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxAdvancedPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
