import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCardComponent } from './application-card.component';

describe('ApplicationCardComponent', () => {
  let component: ApplicationCardComponent;
  let fixture: ComponentFixture<ApplicationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
