import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCatalogComponent } from './games-catalog.component';

describe('GamesCatalogComponent', () => {
  let component: GamesCatalogComponent;
  let fixture: ComponentFixture<GamesCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
