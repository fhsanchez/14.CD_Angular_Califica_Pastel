import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCakeDetailComponent } from './rate-cake-detail.component';

describe('RateCakeDetailComponent', () => {
  let component: RateCakeDetailComponent;
  let fixture: ComponentFixture<RateCakeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateCakeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateCakeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
