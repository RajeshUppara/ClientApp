import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPromotionComponent } from './verify-promotion.component';

describe('VerifyPromotionComponent', () => {
  let component: VerifyPromotionComponent;
  let fixture: ComponentFixture<VerifyPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
