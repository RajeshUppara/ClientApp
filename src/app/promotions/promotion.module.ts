import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevdrPromotionComponent } from './devdr-promotion/devdr-promotion.component';
import { VerifyPromotionComponent } from './verify-promotion/verify-promotion.component';
import { OppPromotionComponent } from './opp-promotion/opp-promotion.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot()
  ],
  declarations: [
    DevdrPromotionComponent,
    VerifyPromotionComponent,
    OppPromotionComponent
  ]
})
export class PromotionsModule { }
