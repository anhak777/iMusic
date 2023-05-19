import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseSliderComponent } from './release-slider.component';

describe('ReleaseSliderComponent', () => {
  let component: ReleaseSliderComponent;
  let fixture: ComponentFixture<ReleaseSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
