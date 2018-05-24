import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';

@Component({
  selector: 'app-opp-promotion',
  templateUrl: './opp-promotion.component.html',
  styleUrls: ['./opp-promotion.component.css']
})
export class OppPromotionComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.updateTitle("Oppn Promotion Page");
  }

}
