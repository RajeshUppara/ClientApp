import { Component, OnInit } from '@angular/core';

import { AppService } from '../../shared/service/app.service';

@Component({
  selector: 'app-devdr-promotion',
  templateUrl: './devdr-promotion.component.html',
  styleUrls: ['./devdr-promotion.component.css']
})
export class DevdrPromotionComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.updateTitle("DevDr Promotion Page");
  }
}
