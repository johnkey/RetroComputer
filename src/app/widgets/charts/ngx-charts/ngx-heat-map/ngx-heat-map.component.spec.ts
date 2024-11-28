import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHeatMapComponent } from './ngx-heat-map.component';

describe('NgxHeatMapComponent', () => {
  let component: NgxHeatMapComponent;
  let fixture: ComponentFixture<NgxHeatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxHeatMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
