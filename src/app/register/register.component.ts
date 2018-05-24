import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/service/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.updateTitle("Registration Page");
  }
}
