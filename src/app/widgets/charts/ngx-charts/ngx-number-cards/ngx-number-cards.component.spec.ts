import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNumberCardsComponent } from './ngx-number-cards.component';

describe('NgxNumberCardsComponent', () => {
  let component: NgxNumberCardsComponent;
  let fixture: ComponentFixture<NgxNumberCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxNumberCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxNumberCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
