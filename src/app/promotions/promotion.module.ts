import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../home/home.component';
import { DevdrPromotionComponent } from './devdr-promotion/devdr-promotion.component';
import { VerifyPromotionComponent } from './verify-promotion/verify-promotion.component';
import { OppPromotionComponent } from './opp-promotion/opp-promotion.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'promotion/devdr', component: DevdrPromotionComponent },
  { path: 'register', component: RegisterComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    SharedModule.forRoot()
  ],
  exports: [RouterModule],
  declarations: [
    DevdrPromotionComponent,
    VerifyPromotionComponent,
    OppPromotionComponent
  ]
})
export class PromotionsModule { }
