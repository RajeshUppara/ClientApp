import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';

@Component({
  selector: 'app-verify-promotion',
  templateUrl: './verify-promotion.component.html',
  styleUrls: ['./verify-promotion.component.css']
})
export class VerifyPromotionComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.updateTitle("Verify Promotion Page");
  }

}
