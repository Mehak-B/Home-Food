import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPlatformComponent } from './food-platform.component';

describe('FoodPlatformComponent', () => {
  let component: FoodPlatformComponent;
  let fixture: ComponentFixture<FoodPlatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodPlatformComponent]
    });
    fixture = TestBed.createComponent(FoodPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
