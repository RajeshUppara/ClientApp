import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevdrPromotionComponent } from './devdr-promotion.component';

describe('DevdrPromotionComponent', () => {
  let component: DevdrPromotionComponent;
  let fixture: ComponentFixture<DevdrPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevdrPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevdrPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
