import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMessagesComponent } from './last-messages.component';

describe('LastMessagesComponent', () => {
  let component: LastMessagesComponent;
  let fixture: ComponentFixture<LastMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
