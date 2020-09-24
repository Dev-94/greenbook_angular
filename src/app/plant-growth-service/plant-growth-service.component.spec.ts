import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantGrowthServiceComponent } from './plant-growth-service.component';

describe('PlantGrowthServiceComponent', () => {
  let component: PlantGrowthServiceComponent;
  let fixture: ComponentFixture<PlantGrowthServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantGrowthServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantGrowthServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
