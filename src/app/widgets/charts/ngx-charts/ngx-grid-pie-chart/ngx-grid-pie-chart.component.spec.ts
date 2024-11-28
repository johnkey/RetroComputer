import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGridPieChartComponent } from './ngx-grid-pie-chart.component';

describe('NgxGridPieChartComponent', () => {
  let component: NgxGridPieChartComponent;
  let fixture: ComponentFixture<NgxGridPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxGridPieChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxGridPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
