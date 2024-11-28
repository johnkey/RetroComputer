import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCarouselComponent } from './games-carousel.component';

describe('CarouselComponent', () => {
  let component: GamesCarouselComponent;
  let fixture: ComponentFixture<GamesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
