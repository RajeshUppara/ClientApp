import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppPromotionComponent } from './opp-promotion.component';

describe('OppPromotionComponent', () => {
  let component: OppPromotionComponent;
  let fixture: ComponentFixture<OppPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
