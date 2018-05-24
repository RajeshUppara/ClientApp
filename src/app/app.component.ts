import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ApexService } from './shared/service/apex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuItems: string [];
  title: string;
  private _titleUpdateSubscription: any;

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver, private httpClient: HttpClient, private apexService: ApexService) {
  }
  ngOnInit() {
    this.httpClient.get('../assets/menuitems.json').subscribe(
      (data) => {
        this.menuItems = data as string [];
        console.log(this.menuItems);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );

    this._titleUpdateSubscription = this.apexService.titleUpdateEvent.subscribe((data) => {
      //if(data != this.title) {
        //console.log(this.title);
        this.title = data;
      //}
    });

  };


}
